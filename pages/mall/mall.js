// pages/mall/mall.js
var globalData = getApp().globalData
let goodsData = require('../../libs/goodsData.js')
let sellerData = require('../../libs/sellerData.js')
let {
  getLocation,
  setBadge
} = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: '定位中...',
    seller: sellerData,
    current_seller: wx.getStorageSync('seller'),
    current_breed_list: undefined,
    current_breed: {},
    breed: [{
      sid: 1,
      list: [{
        id: 1,
        name: '推荐'
      }, {
        id: 2,
        name: '猜你喜欢',
        new: true
      }, {
        id: 3,
        name: '热销爆款'
      }, {
        id: 4,
        name: '品质定制'
      }, {
        id: 5,
        name: '环球美食'
      }, {
        id: 6,
        name: '缤纷美食'
      }, {
        id: 7,
        name: '热销爆款'
      }, {
        id: 8,
        name: '品质定制'
      }, {
        id: 9,
        name: '环球美食'
      }, {
        id: 10,
        name: '缤纷美食'
      }]
    }, {
      sid: 2,
      list: [{
        id: 1,
        name: '推荐'
      }, {
        id: 2,
        name: '猜你喜欢'
      }, {
        id: 3,
        name: '热销爆款'
      }, {
        id: 4,
        name: '品质定制',
        new: true
      }, {
        id: 5,
        name: '鱼类肉类'
      }, {
        id: 6,
        name: '优良干货'
      }, {
        id: 7,
        name: '中外名酒'
      }, {
        id: 8,
        name: '品质定制'
      }, {
        id: 9,
        name: '环球美食'
      }, {
        id: 10,
        name: '缤纷美食'
      }]
    }],
    open_seller_list: false,
    goods: [],
    top: 0 // 下拉高度
  },
  // 获得seller-list高度
  getRect: function () {
    let that = this
    wx.createSelectorQuery().select('.seller-list').boundingClientRect(function (rect) {
      that.setData({
        top: rect.height
      })
      // console.log(that.data.top)
    }).exec()

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    if (wx.getStorageSync('seller') == '') {
      wx.setStorage({
        key: 'seller',
        data: this.data.seller[0],
        success: (res) => {
          that.setData({
            current_seller: wx.getStorageSync('seller')
          })
          this.changeBreed()
        }
      })
    } else {
      that.setData({
        current_seller: wx.getStorageSync('seller')
      })
      this.changeBreed()
    }
    this.getRect()
    wx.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        getLocation().then(address => {
          that.setData({
            address
          })
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  // 添加购物车
  changeCart: function(cart) {
    setBadge()
  },
  // 获取商品
  getGoods: function() {
    wx.showLoading({
      title: '拼命加载中...',
    })
    let that = this
    let goods = this.randomGoods()
    setTimeout(() => {
      that.setData({
        goods
      })
      wx.hideLoading()
    }, 500)
  },
  // 随机生商品
  randomGoods: function() {
    let goods = []
    for (let i = 0; i < Math.random() * 10; i++) {
      goods.push(goodsData[Math.random() > 0.5 ? 0 : 1]);
    }
    return goods
  },
  // 开关商家列表
  openSeller: function() {
    this.setData({
      open_seller_list: !this.data.open_seller_list
    })
  },
  // 改变品种
  changeBreed: function() {
    console.log(this.data.current_seller.id)
    let breed = this.data.breed.filter((item) => {
      return item.sid === this.data.current_seller.id
    })

    // wx.setStorageSync('seller', breed[0])
    this.setData({
      current_breed_list: breed[0].list
    })
    this.setData({
      current_breed: this.data.current_breed_list[0]
    })
    this.getGoods()
  },
  // 选择品种
  chooseBreed: function(e) {
    let breed = e.currentTarget.dataset.item
    this.setData({
      current_breed: breed
    })
    this.getGoods()
  },
  // 选择商家
  selectSeller: function(e) {
    wx.setStorage({
      key: 'seller',
      data: e.currentTarget.dataset.item
    })
    this.setData({
      open_seller_list: false,
      current_seller: e.currentTarget.dataset.item
    })
    this.changeBreed()
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