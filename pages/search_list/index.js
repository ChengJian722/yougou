// pages/search_list/index.js
import request from "../../utils/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    keyword: "",
    // 商品列表
    goods: [],
    pagenum: 1,
    pagesize: 10,
    //是否有更多
    hasMore:true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //  let keyword="小米";
    var {
      keyword
    } = options
    // console.log(this.data,"这是data数据")
    // var {pagenum, pagesize} = data
    this.setData({

      keyword: options.keyword
    })
    this.getData()


  },
  handleChange(event) {
    // console.log(event)
    const {
      index
    } = event.currentTarget.dataset;
    this.setData({
      current: index
    })

  },
  //加载下一页的数据
  onReachBottom() {
    if(!this.data.hasMore){
      return;
    }
    //页数加1
    this.setData({
      pagenum: this.data.pagenum + 1
    })
    this.getData()
  },
  //封装
  getData() {
    const {keyword,pagenum,pagesize}=this.data;
    request({
      url: "/goods/search",
      data: {
        query:keyword,
        pagenum,
        pagesize
      }
    }).then(res => {
      //  console.log(res);
      const {
        goods
      } = res.data.message;
      //是否满足pagesize条数，不满足说明是最后一页
      if(goods.length<10){
        this.setData({
          hasMore:false
        })
      }

      //循环修改商品价格,map方法
      const newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2);
        return v;
      })
      this.setData({
        //解构
        goods: [...this.data.goods,...newGoods]
      })
    })

  }


})