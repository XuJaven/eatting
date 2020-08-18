import axios from 'axios'
import cookies from  'vue-cookies'

let url='http://180.76.173.24:8080/'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.headers.test='test'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
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
http.post=function (data,content) {
  return new Promise((resolve, reject)=>{
    // if(content==1){
      axios.post(url,data,{headers:{'content-type':'multipart/form-data'}}).then((response)=>{
        resolve(response)
      }).catch((error)=>{ // 请求失败处理
        reject(error)
      })
    /*}
    else{
      axios.post(useurl,data).then((response)=>{
        resolve(response)
      }).catch((error)=>{ // 请求失败处理
        reject(error)
      })}*/
  })
}
http.get=function(data){
  return new Promise((resolve, reject)=> {
 /*   if(cookies.isKey('usetoken') ){
      data.token=cookies.get('usetoken')
    }*/
    axios.get(url, {params: data}
    ).then((response) => {
      resolve(response)
    }).catch((error) => { // 请求失败处理
      reject(error)
    })
  })
}

export default http
