// pages/order/order.js
const mta = require('../../utils/mta_analysis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      key: 0,
      title: '全部'
    }, {
      key: 1,
      title: '待支付'
    }, {
      key: 2,
      title: '代配送'
    }, {
      key: 3,
      title: '退款/售后'
    }],
    current: '0'
  },
  handleChange: function({detail}){
    this.setData({
      current: detail.key
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mta.Page.init()
    this.setData({
      current: options.current
    })
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