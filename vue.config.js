const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
      proxy:{
          '/api':{
              target:'http://localhost:3000', //目标服务地址
              ws:'',
              changeOrigin:true, //是否开启跨域访问
              pathRewrite:{  //地址重写
                   '^/api':''
              }
              
          }
          
      }
  }
  
})
