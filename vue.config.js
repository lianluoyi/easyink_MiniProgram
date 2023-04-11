module.exports = {
  transpileDependencies: ["uview-ui"],
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target:  process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          "^/api": " ",
        },
      },
    },
  },
};
