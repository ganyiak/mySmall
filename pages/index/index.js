//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    titleList: [
      {
        "title": "Bitbank推出比特币借贷服务",
        "time": "2018-09-09 09:11"
      },
      {
        "title": "Bitbank推出比特币借贷服务",
        "time": "2018-09-09 09:11"
      },
      {
        "title": "Bitbank推出比特币借贷服务",
        "time": "2018-09-09 09:11"
      }, 
      {
        "title": "Bitbank推出比特币借贷服务",
        "time": "2018-09-09 09:11"
      },
      {
        "title": "Bitbank推出比特币借贷服务",
        "time": "2018-09-09 09:11"
      }
    ]
  },
  //事件处理函数
  openDailTask: function() {
    console.log('dfgdfg')
    wx.navigateTo({
      url: '../activity/daily/daily'
    })
  },
  openInfo: function () {
    console.log('dfgdfg')
    wx.navigateTo({
      url: '../user/competeInfo/competeInfo'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
