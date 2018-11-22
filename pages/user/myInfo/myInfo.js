// pages/user/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navList: [
      {
        "title": '个人资料',
        "url": ""
      },
      {
        "title": '积分记录',
        "url": ""
      },
      {
        "title": '兑换记录',
        "url": ""
      }
    ]
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
    let that = this
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo: res.data,
          hasUserInfo: true
        })
      },
    })
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

  },
  getUserInfo () {
    let that = this
    wx.getSetting({
      success (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              that.setData({
                hasUserInfo: true,
                userInfo: res.userInfo
              })
              wx.setStorage({
                key: 'userInfo',
                data: res.userInfo,
              })
            }
          })
        }
      }
    })
  }
})