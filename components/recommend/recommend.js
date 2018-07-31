// components/recommend/recommed.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    goods: [{
      id: 1,
      name: '蒜蓉贝类拼盘',
      price: 9.9,
      icon: '../../images/goods/goods_1.jpg',
      tab_price: true
    }, {
      id: 2,
      name: '乐事薯片',
      price: 5,
      icon: '../../images/goods/goods_2.jpg',
      tab_price: false
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCart: function(cart) {
      this.triggerEvent('addCart', cart)
    }
  }
})