// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
   onSubmit(e){
     let username=e.detail.value.username;
     let password=e.detail.value.password;
     console.log(username)
     console.log(password)
     wx.request({
       url: 'http://127.0.0.1:8070/user.json',
       success:function(res){
         let name=res.data.username
         let pwd=res.data.password
         if(username === name && password === pwd){
           console.log('登录成功')
           wx.redirectTo({
             url: '/pages/index/index',
           })
         }else{
           console.log('登录失败')
         }
       }
     })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})