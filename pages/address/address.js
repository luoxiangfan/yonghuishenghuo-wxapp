// pages/address/address.js
let city = require('../../libs/cityData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      userName: '',
      phone: '',
      city: '深圳',
      address1: '',
      address2: '',
      tag: []
    },
    tag: [{
      value: '家',
      checked: false
    }, {
      value: '公司',
      checked: false
    }],
    showModal: false, // 是否打开modal
    showSheet: false, // 是否打开sheet
    newTag: '',
    limit: 5, // tag最多限制
    city
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  checkName: function(e) {
    let name = e.detail.value
    if (name.length <= 0) {
      wx.showToast({
        title: '请输入收货人'
      })
    } else {
      return true
    }
  },
  // 打开sheet
  showSheet: function() {
    this.setData({
      showSheet: true
    })
  },
  // 选择城市
  selectCity: function(e) {
    let address = this.data.address
    address.city = e.detail.name
    this.setData({
      address,
      showSheet: false
    })
  },
  // 选择标签
  checkTag: function(e) {
    let checked = !e.currentTarget.dataset.checked
    let idx = e.currentTarget.dataset.idx
    let tag = this.data.tag
    tag[idx].checked = checked
    this.setData({
      tag
    })
  },
  //添加标签
  addTag: function() {
    this.setData({
      showModal: true
    })
  },
  // 关闭modal
  onModalCancel: function() {
    this.setData({
      showModal: false
    })
  },
  // 确认添加tag
  onModalConfirm: function() {
    let newTag = this.data.newTag
    let length = newTag.length
    if (length <= 0) {
      this.onModalCancel()
    } else if (length <= 4) {
      let tag = this.data.tag
      tag.push({
        value: newTag,
        checked: true
      })
      this.setData({
        tag,
        newTag: '',
        showModal: false
      })
    } else {
      wx.showToast({
        title: '标签最多4个字符',
        icon: 'none'
      })
    }
  },
  // 监听设置新标签
  setNewTag: function(e) {
    this.setData({
      newTag: e.detail.value
    })
  },
  // 获得手机号码
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})