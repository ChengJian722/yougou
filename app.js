import request from "./utils/request.js"
//app.js
App({
  onLaunch: function () {
    request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1"
      //传入一个函数，统一处理请求错误
      
   
  }
})