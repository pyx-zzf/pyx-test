const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))
    },
    // devServer:{
    //     // port:"6868"，  //配置开发服务器的端口（打包可以无需配置）
    //     // 配置跨域代理（也可以使用CROS解决跨域）
    //     proxy:{
    //         "/api":{},
        
    //         // 目标服务器地址
    //         target:"http://192.168.1.1:4343", 
    //         // 是否代理websocket
    //         ws:true,
    //         pathRewrite:{
    //             "^/api":"" //url重写
    //         },
    //     },
    // },
      //生成环境部署路径，默认为'/'
    publicPath: process.env.NODE_ENV === 'production'
    ? './'     //可以填写项目名'myweb',但打包为app时设置为'./'.
    : '/',   
    //当运行 build 时生成的生产环境构建文件的目录
    outputDir:'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir:'',

}

