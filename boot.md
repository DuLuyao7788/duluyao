 [[TOC]]

# 工具类
## 边框border
### 边框位置
    四周边框：border
    上边框：border-top
    下边框：border-bottom
    左边框：border-left
    右边框：border-right
### 边框粗细 将元素添加到元素以删除所有边框或边框
    边框为0：border-0
    上边框为0：border-top-0
    右边框为0：border-right-0
    下边框为0：border-bottom-0
    左边框为0：border-left-0
### 边框颜色
    边框颜色为首要的：border border-primary
    边框颜色为次要的：border border-secondary
    边框颜色为成功：border border-success
    边框颜色为危险：border border-danger
    边框颜色为警告：border border-warning
    边框颜色为信息：border border-info
    边框颜色为亮色：border border-light
    边框颜色为暗色：border border-dark
    边框颜色为白色：border border-white
### 边框弧度Border-radius
    四边有弧度：rounded
    上边框有弧度：rounded-top
    右边框有弧度：rounded-right
    下边框有弧度：rounded-bottom
    左边框有弧度：rounded-left
    边框为圆形：rounded-circle
    边框为胶囊形状：rounded-pill
    边框没有弧度：rounded-0
### 大小
    更小的边框半径：rounded-sm
    更大的边框半径：rounded-lg
## 清除浮动（Clearfix）
### 为父元素添加 .clearfix 清除浮动
### 可以作为 mixin 使用
     @mixin clearfix() {
      &::after {
      display: block;
      content: "";
      clear: both;
     }
    }

   <!-- 作为 mixin 使用 -->
    .element {
     @include clearfix;
    }
## 关闭图标
  aria-label
  ```html
  <button type="button" class="close" aria-label="关闭">
  <span aria-hidden="true">&times;</span>
  </button>
 ```
## 颜色
### 字体颜色
    字体颜色为首要的：text-primary
    字体颜色为次要的：text-secondary
    字体颜色为成功：text-success
    字体颜色为危险：text-danger
    字体颜色为警告：text-warning
    字体颜色为信息：text-info
    字体颜色为亮色：text-light
    字体颜色为暗色：text-dark
    字体颜色为身体：text-body
    字体颜色为柔和：text-muted
    字体颜色为白色：text-white
    字体颜色为50%黑色：text-black-50
    字体颜色为50%白色：.text-white-50
### 背景颜色
    bg-primary
    bg-secondary
    bg-success
    bg-danger 
    bg-warning
    bg-info
    bg-light
    bg-dark
    bg-white
    bg-transparent(透明色)
### 背景渐变
    bg-gradient-primary
    bg-gradient-secondary
    bg-gradient-success
    bg-gradient-danger
    bg-gradient-warning
    bg-gradient-info
    bg-gradient-light
    bg-gradient-dark
## dispaly属性
    .d-{value} for xs
    .d-{breakpoint}-{value} for sm, md, lg, and xl.
    value的值
     none 隐藏在所有
     inline 行内
     inline-block 行内块元素
     block 块元素
     table 表格
     table-cell 表格列
     table-row  表格行
     flex 
                                     
### Display in print(显示打印)
    d-print-none
    d-print-inline
    d-print-inline-block：打印时应用display:inline-block到元素
    d-print-block：打印时应用display:block到元素
    d-print-table
    d-print-table-row
    d-print-table-cell
    d-print-flex
    d-print-inline-flex
## flex
### dispaly
    d-flex
    d-inline-flex
  
### Direction 布局方向
    flex-row
    flex-row-reverse
    flex-column
    flex-column-reverse
 
### Justify content 内容排列方式
    justify-content-start
    justify-content-end
    justify-content-center
    justify-content-between
    justify-content-around
    
### Align items 对齐项目
     align-items-start
     align-items-end
     align-items-center
     align-items-baseline
     align-items-stretch
   
### Align self
    align-self-start
    align-self-end
    align-self-center
    align-self-baseline
    align-self-stretch
 
### fill 所占空间
    flex-fill
  
### 
    flex-{grow|shrink}-0
    flex-{grow|shrink}-1
  
### wrap
    flex-nowrap：不换行
    flex-wrap：换行
    flex-wrap-reverse
 
### order 排序
    order-0
    order-1
    order-2
    order-3
    order-4
    order-5
    order-6
    order-7
    order-8
    order-9
    order-10
    order-11
    order-12
   
### Align content
    align-content-start
    align-content-end
    align-content-center
    align-content-around
    align-content-stretch
## Float
     float-left：左浮动
     float-right：右浮动
     float-none：不浮动
## 图片替换
 **代码示例**
 ```html
 <h1 class="text-hide" style="background-image: url('...');">Bootstrap</h1>
 ```
## 溢出overflow
    overflow-auto
    overflow-hidden

## 定位Position
    position-static：静态定位
    position-relative：相对定位
    position-absolute：绝对定位
    position-fixed：固定定位
    position-sticky：粘性固定定位
### fixed 
    fixed-top：固定在顶部
    fixed-bottom：固定在底部
### sticky
    sticky-top：粘顶
## 屏幕识读器
    sr-only
    sr-only-focusable
 **代码示例**
 ```html
 <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>

 // Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
 ```
## 阴影
    shadow-none 无阴影
    shadow-sm 小阴影
    shadow 一般阴影
    shadow-lg 大阴影 
## 尺寸
### width
    w-25：Width 25%
    w-50：Width 50%
    w-75：Width 75%
    w-100：Width 100%
    w-auto：Width auto
### height
    h-25：Hidth 25%
    h-50：Hidth 50%
    h-75：Hidth 75%
    h-100：Hidth 100%
    h-auto：Hidth auto
### max
    mw-100：最大宽度
    mh-100：最大高度
### 
```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```

## 间隔
    {property}{sides}-{size} for xs  {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl
 **property**

     m ： margin
     p ：padding
**sides**

    t ： margin-top or padding-top
    b  ： margin-bottom or padding-bottom
    l ： margin-left or padding-left
    r ： margin-right or padding-right
    x ： *-left and *-right
    y ： *-top and *-bottom
**size**

    0 : margin or padding by setting it to 0
    1 : margin or padding to $spacer * .25
    2 : margin or padding to $spacer * .5
    3 : margin or padding to $spacer
    4 : margin or padding to $spacer * 1.5
    5 :margin or padding to $spacer * 3
    auto : margin to auto
## 文本
### 文本对齐
    text-left：左对齐
    text-center：居中对齐
    text-right：右对齐
    text-sm-left
    text-md-left
    text-lg-left
    text-xl-left
### 文字折行和溢出
    text-wrap：文字折行
    text-nowrap：文字不折行
    text-truncate 文本截断并添加省略号 但必须是 display: inline-block 或 display: block 类型
### 单词中断
    text-break
### 文本转换
    text-lowercase：转为小写的文本
    text-uppercase：转为大写的文本
    text-capitalize：转为首字母大写的文本
### 字体粗细和斜体
    font-weight-bold
    font-weight-bolder
    font-weight-normal
    font-weight-light
    font-weight-lighter
    font-italic：斜体
### 等宽字体
    text-monospace
### 重置颜色
    text-reset
### 文字装饰
    text-decoration-none 去除文字的装饰
## 垂直对齐
    align-baseline：默认
    align-top
    align-middle
    align-bottom
    align-text-top：内容居上
    align-text-bottom：内容居下
## 可见性
    visible
    invisible





