import axios from 'axios'
// import cookies from  'vue-cookies'

let urlIp='http://localhost:8088'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.headers.test='test'
  // Response.Headers.Add("Access-Control-Allow-Origin", "*")
  // config.headers.Access-Control-Allow-Origin = '*'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么,只传data部分到页面
  return Promise.resolve(response.data)
}, function (error) {
  // 对响应错误做点什么，啥也没做
  return Promise.reject(error);
});




const http = {}
http.post=function (url,data) {
  url =urlIp+url
  console.log(data)
  return new Promise((resolve, reject)=>{
    axios.post(url,data,{headers:{'content-type':'application/json'}}).then((response)=>{
      resolve(response)
    }).catch((error)=>{ // 请求失败处理
      reject(error)
    })
  })
}
http.get=function(url,data){
  url =urlIp+url
  return new Promise((resolve, reject)=> {
    axios.get(url, {params: data}
    ).then((response) => {
      resolve(response)
    }).catch((error) => { // 请求失败处理
      reject(error)
    })
  })
}

export default http
