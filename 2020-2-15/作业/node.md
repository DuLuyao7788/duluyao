[[TOC]]
# module（模块）
     在 Node.js 模块系统中，每个文件都被视为一个独立的模块。
     通过在特殊的 exports 对象上指定额外的属性，可以将函数和对象添加到模块的根部,模块系统在 require('module') 模块中实现。
# 访问主模块
     当 Node.js 直接运行一个文件时， require.main 会被设为它的 module。 这意味着可以通过 require.main === module 来判断一个文件是否被直接运行：

     对于 foo.js 文件，如果通过 node foo.js 运行则为 true，但如果通 过 require('./foo') 运行则为 false。

     因为 module 提供了一个 filename 属性（通常 等同于 __filename），   所以可以通过检查 require.main.filename 来获取当前应用程序的入口点
# .mjs 扩展名
     mjs 扩展名是保留给 ECMAScript 模块，无法通过 require() 加载。
# 缓存
     模块在第一次加载后会被缓存。多次调用 require(foo) 不会导致模块的代码被执行多次，如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。
     模块是基于其解析的文件名进行缓存的。 由于调用模块的位置的不同，模块可能被解析成不同的文件名（比如从 node_modules 目录加载），这样就不能保证 require('foo') 总能返回完全相同的对象。

     此外，在不区分大小写的文件系统或操作系统中，被解析成不同的文件名可以指向同一文件，但缓存仍然会将它们视为不同的模块，并多次重新加载。 例如require('./foo') 和 require('./FOO') 返回两个不同的对象，而不会管 ./foo 和 ./FOO 是否是相同的文件
# 核心模块
     Node.js 有些模块会被编译成二进制。 这些模块别的地方有更详细的描述。核心模块定义在 Node.js 源代码的 lib/ 目录下。require() 总是会优先加载核心模块
# 循环
     当循环调用 require() 时，一个模块可能在未完成执行时被返回。
     为了防止无限的循环，会返回一个 a.js 的 exports 对象的 未完成的副本 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。
# 文件模块
    如果按确切的文件名没有找到模块，则 Node.js 会尝试带上 .js、 .json 或 .node 拓展名再加载。.js 文件会被解析为 JavaScript 文本文件， .json 文件会被解析为 JSON 文本文件。 .node 文件会被解析为通过 process.dlopen() 加载的编译后的插件模块。
    以 '/' 为前缀的模块是文件的绝对路径
    以 './' 为前缀的模块是相对于调用 require() 的文件的
    当没有以 '/'、 './' 或 '../' 开头来表示文件时，这个模块必须是一个核心模块或加载自 node_modules 目录
    如果给定的路径不存在，则 require() 会抛出一个 code 属性为 'MODULE_NOT_FOUND' 的 Error
#  目录作为模块
    在根目录下创建一个 package.json 文件，并指定一个 main 模块。 例子， package.json 文件类似：

    { "name" : "some-library",
    "main" : "./lib/some-library.js" }
# 从全局目录加载
    如果 NODE_PATH 环境变量被设为一个以冒号分割的绝对路径列表，则当在其他地方找不到模块时 Node.js 会搜索这些路径。

    在 Windows 系统中， NODE_PATH 是以分号（;）间隔的。
# 模块封装器 
   在执行模块代码之前，Node.js 会使用一个如下的函数封装器将其封装：

    (function(exports, require, module, __filename, __dirname) {
      // 模块的代码实际上在这里
         });
     通过这样做，Node.js 实现了以下几点：
     它保持了顶层的变量（用 var、 const 或 let 定义）作用在模块范围内，而不是全局对象。
     它有助于提供一些看似全局的但实际上是模块特定的变量，例如：
     实现者可以用于从模块中导出值的 module 和 exports 对象。
     包含模块绝对文件名和目录路径的快捷变量 __filename 和 __dirname 
# 模块作用域
## __dirname
  
    当前模块的目录名。 与 __filename 的 path.dirname() 相同。
## __filename
    当前模块的文件名。 这是当前的模块文件的绝对路径（符号链接会被解 析）对于主程序，这不一定与命令行中使用的文件名相同。
## exports
    这是一个对于 module.exports 的更简短的引用形式
## module
    对当前模块的引用, 查看关于 module 对象的章节
## require(id)
    id: 模块的名称或路径。
    返回: 导入的模块内容
    用于引入模块、 JSON、或本地文件
## require.cache
    被引入的模块将被缓存在这个对象中
## require.main
    Module 对象，表示当 Node.js 进程启动时加载的入口脚本
## require.resolve(request[, options])
    request 需要解析的模块路径。
    options 
           paths 从中解析模块位置的路径。 如果存在，则使用这些路径而不是默认的解析路径，但 GLOBAL_FOLDERS 除外，例如 $HOME/.node_modules，它们总是包含在内。 这些路径中的每一个都用作模块解析算法的起点，这意味着从该位置开始检查 node_modules 层次结构。
        返回: <string[]>
        使用内部的 require() 机制查询模块的位置，此操作只返回解析后的文件名,不会加载该模块
## require.resolve.paths(request)
     request:被查询解析路径的模块的路径。
     返回: <string[]> | <null>

     返回一个数组，其中包含解析 request 过程中被查询的路径，如果 request 字符串指向核心模块则返回 null。
## module 对象
     <Object>
     在每个模块中， module 的自由变量是对表示当前模块的对象的引用。 为方便起见，还可以通过全局模块的 exports 访问 module.exports。 module 实际上不是全局的，而是每个模块本地的。
## module.children
     被该模块引用的模块对象
## module.exports
     module.exports 对象由 Module 系统创建。有时这是不可接受的；许多人希望他们的模块成为某个类的实例,为此，需要将期望导出的对象赋值给 module.exports
## exports 快捷方式
     exports 变量是在模块的文件级作用域内可用的，且在模块执行之前赋值给 module.exports
     module.exports.f = ... 可以更简洁地写成 exports.f = ...
## module.filename
    <string>
     模块的完全解析后的文件名
## module.id
     <string>
     模块的标识符。 通常是完全解析后的文件名
## module.loaded
     <boolean>
     模块是否已经加载完成，或正在加载中
## module.parent
     <module>
     最先引用该模块的模块。
##  module.paths
     <string[]>
     模块的搜索路径
## module.require(id)
     id:<string>
     返回: <any> 导出的模块内容。
     module.require() 方法提供了一种加载模块的方法，就像从原始模块调用 require() 一样

     为了做到这个，需要获得一个 module 对象的引用。 因为 require() 会返回 module.exports，且 module 通常只在一个特定的模块代码中有效，所以为了使用它，必须显式地导出
##  Module 对象
     <Object>
     为 Module 实例提供通用方法。 module 变量常见于文件模块中。 通过 require('module') 获取
## module.builtinModules
      <string[]>
      罗列 Node.js 提供的所有模块名称。可以用来判断模块是否为第三方所维护

      const builtin = require('module').builtinModules;
## module.createRequire(filename)
     filename:<string> | <URL> 用于构造 require 函数的文件名。必须是一个文件 URL 对象、文件 URL 字符串、或绝对路径字符串。
     返回: <require> require 函数。
