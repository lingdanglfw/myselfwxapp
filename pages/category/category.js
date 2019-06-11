// pages/category/category.js
Page({


  /**
   * Page initial data
   */
  data: {
    listData: []

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      //url: 'http://www.yi-ma.cn:5000/api/product',
      url: 'https://webappbbacsaspoc2.azurewebsites.net/ebuy/api/Product/GetCategories',
      data: {
      },
      method: "GET",
      success: function (res) {
        if (res.data) {
          console.log(res.data);
          that.setData({
            listData: res.data.data
          })
        }
      }
    })
  },



  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {
  },
  bindViewTap: function () { wx.switchTab({ url: '../product/product' }) }
})