//app.js
import mta from 'utils/mta_analysis.js';
let {
  setBadge
} = require('./utils/util.js')
let seller = require('./libs/sellerData.js')
App({
  globalData: {
    address: '',
    userinfo: null,
    userLocation: false,
    cart: wx.getStorageSync('cart') ? wx.getStorageSync('cart') : [],
    seller: {}
  },
  onLaunch: function() {
    // mta  
    mta.App.init({
      "appID": "500637608",
      "eventID": "500637609",
      "statPullDownFresh": true,
      "statShareApp": true,
      "statReachBottom": true
    });
    // 设置购物车badge
    setBadge()
    // 获取当前店家
    if (wx.getStorageSync('seller') == '') {
      wx.setStorage({
        key: 'seller',
        data: seller[0]
      })
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              wx.setStorageSync('userInfo', res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})