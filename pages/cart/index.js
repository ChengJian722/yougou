// pages/cart/index.js
Page({
  data:{
    //收货人信息
    adderss:{
      userName:"",
      telNumber:"",
      detailInfo:"",

    }
  },
  onLoad: function (options){

  },
  handleadderss(){
    wx.chooseAddress({
      success:res=> {
        console.log(res)
        this.setData({
          adderss:{
            userName: res.userName,
            telNumber: res.telNumber,
            detailInfo: res.provinceName + res.cityName + res.countyName + res.detailInfo
          }
        })
      }
    })
  }

  
})