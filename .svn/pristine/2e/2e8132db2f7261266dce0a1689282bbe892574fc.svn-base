// pages/Profile/order/orderDetail.js
var Util = require('../../../utils/util.js');
//获取应用实例
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    yooyo_sessid: '',
    partner_id: '',
    id: '',
     order_no: '',
     state_label: '',
     order_count: '',
     total_price: '',
     pay_price: '',
     order_time: '',
     product_name: '' ,
     logo_rsurl: '',
     sku_detail_name: '',
     total_product_count: '',
     sku_state_label: '',
     receiver_name: '', 
     receiver_mobile: '', 
     base_type: '',  
     merchant_name: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.data.yooyo_sessid = res.data.yooyo_sessid;
        that.data.partner_id = res.data.member.partner_id;
        that.getOrderDetail(that.data.id);
      },
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
  
  },

  getOrderDetail: function (id) {
    // var url ="https://open.yooyo.com/rtapi/outer/router.json?app_key=yooyo_weekend&method=emall.order.get&yooyo_sessid=51f7d45c-a377-4c61-83a8-406a5ee16174&id=302148&version=5&app_id=2&timestamp=1520589011091&partner_id=16";

    wx.showLoading({
      title: '请稍等',
    });

    var that = this;
    wx.request({
      url: app.globalData.urlBase,
      data: {
        app_key: 'yooyo_weekend',
        method: 'emall.order.get',
        version: '5',
        app_id: '2',
        timestamp: Date.now(),
        yooyo_sessid: that.data.yooyo_sessid,
        partner_id: that.data.partner_id,
        id: that.data.id,
        
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        // success
        wx.hideLoading();
        console.log("getOrderDetail成功请求数据");
        console.log(res);
        that.processOrderDetailData(res.data);
      },
      fail: function (res) {
        // fail

      },
      complete: function (res) {
        // complete

      }
    })
  },

  processOrderDetailData: function (res) {

    this.data.order_no = res.data.order_no;
    this.data.state_label = res.data.state_label;
    this.data.order_count = res.data.order_count;
    this.data.total_price = res.data.total_price;
    this.data.pay_price = res.data.pay_price;
    // this.data.order_time = res.data.order_time;
    var order_time = Util.formatTime(new Date(res.data.order_time));
    this.data.product_name = res.data.product_name;
    this.data.logo_rsurl = res.data.logo_rsurl;
    this.data.receiver_name = res.data.receiver_name;
    this.data.receiver_mobile = res.data.receiver_mobile;

    this.setData({
      order_no: this.data.order_no,
      state_label: this.data.state_label,
      order_count: this.data.order_count,
      total_price: this.data.total_price,
      pay_price: this.data.pay_price,
      order_time: order_time,
      product_name: this.data.product_name,
      logo_rsurl: 'https://'+this.data.logo_rsurl,
      receiver_name: this.data.receiver_name,
      receiver_mobile: this.data.receiver_mobile,
    });

    console.log("details length:" + res.data.details.length);
    if(res.data.details.length > 0) {
      this.data.sku_detail_name = res.data.details[0].sku_detail_name;
      this.data.total_product_count = res.data.details[0].total_product_count;
      this.data.sku_state_label = res.data.details[0].state_label;
      this.data.base_type = res.data.details[0].base_type;
      this.data.merchant_name = res.data.details[0].merchant_name;
      var bill_end_date = Util.formatDay(new Date(res.data.details[0].bill_end_date));
      var checkin_time = Util.formatDay(new Date(res.data.details[0].checkin_time));
      var checkout_time = Util.formatDay(new Date(res.data.details[0].checkout_time));
      this.setData({
        sku_detail_name: this.data.sku_detail_name,
        total_product_count: this.data.total_product_count,
        sku_state_label: this.data.sku_state_label,
        base_type: this.data.base_type,
        merchant_name: this.data.merchant_name,
        bill_end_date: bill_end_date,
        checkin_time: checkin_time,
        checkout_time: checkout_time,
      });
    }
  }

})