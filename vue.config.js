module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,
  devServer: {
    // assetPublicPath: '/dist/',
    // 配置多个代理
    proxy: {
      "/api": {
        target: "https://view.inews.qq.com/",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      "/usc": {
        target: "http://139.196.142.32:8080/CovidData/",
        changeOrigin: true,
        pathRewrite: {
          '^/usc': ''
        }
      }
    }
  }
};
