import  axios from "axios"

let request =  axios.create({
     // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
      
      baseURL:"https://neteasecloudmusicapi.vercel.app",
      timeout:5000,  //设置请求超时，如果超时会中止请求发送
      
})




export default request
