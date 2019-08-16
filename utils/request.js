/**
 * 发起请求
 */
const request = function (config = {}) {
  //判断是否有输入值
  if(!config.url){
    throw new Error("请输入url地址")
    return;
  }
  if(config.url.search(/^http/)===-1){
    config.url = request.defaults.baseURL + config.url;
  }

  //拼接上baseURL
  // config.url=request.defaults.baseURL+config.url;
  //返回一个Promise对象，resolve是成功的回调，reject是失败
  return new Promise((resolve, reject) => {
    //发起小程序请求
    // console.log(...config),
    wx.request({
      //用调用传入的对象解构
      ...config,
      success(res) {
        //成功之后出发then的回调函数
        resolve(res);
      },
      fail(){},
      //后台接口可能会自定义错误，错误的处理函数放到complete来执行
      complete(res){
        //循环调用错误的错误函数
        request.errors.forEach(fn=>{
          fn(res);
        })
      }
    })
  })
};

/**
 * request的默认属性
 */
request.defaults = {
  baseURL: ""
};
//接受错误的触发函数
//保存错误函数
request.errors=[];
request.onError=function(callback){
  request.errors.push(callback)

}


//暴露
export default request;