import request from "../../utils/request.js";
//index.js
//获取应用实例
// const app = getApp()

Page({

  data: {
    louCeng:[],
    menusarry:[],
    autoplay: true,
    imgUrls: [
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ]
  },
  onLoad() {
    //楼层
    request({
      url:"/home/floordata",
    }).then(res=>{
      // console.log(res);
      const {message}=res.data;
      this.setData({
        louCeng:message
      })
    })
    //菜单数据
    request({
      url:"/home/catitems",
    }).then(res=>{
      // console.log(res)
      const {message}=res.data;
      this.setData({
        menusarry:message

      })
    })
    //轮播图
    request({
      url: "/home/swiperdata",
    }).then(res => {
      // console.log(res)
      const {
        message
      } = res.data;
      this.setData({
        imgUrls: message
      })
    })
  }

})