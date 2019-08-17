// pages/category/index.js
import request from "../../utils/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // catearry: [],
    current: 0,
    // 总的数据
    navs: [],

  },
  onLoad() {
    //分类左边
    request({
      url: "/categories",
    }).then(res => {
      console.log(res);
      const {
        message
      } = res.data;
      this.setData({
        navs: message
      })

    })
  },
  handleChange(event) {
    const {
      index
    } = event.currentTarget.dataset;

    this.setData({
      current: index
    })

  }


})