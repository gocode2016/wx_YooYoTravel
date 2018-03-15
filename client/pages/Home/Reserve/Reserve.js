import Common from '../../../utils/common.js'
Page({
  data: {
     sku_id:0,
     sku:''
  },
  onLoad: function (options) {
    this.setData({
      sku_id: options.sku_id
    })
    this.getSku(this.data.sku_id) 
  },
  getSku(id){
    let params = Common.sameParams
    params["id"] = id
    params["method"] = 'emall.sku.get'
    const url = Common.apiUrl + JSON.stringify(params)
    console.log(url)
    var that = this
    wx.showLoading({
      title: 'Loading',
    })
    wx.request({
      url: Common.apiUrl,
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res)
        wx.hideLoading()
        that.setData({
          sku: res.data.data
        })
        console.log(that.data.sku)
      }
    })
  }

  
})