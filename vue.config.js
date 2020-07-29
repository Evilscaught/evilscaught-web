module.exports = {
  publicPath: 
    process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/global";`,
      },
    },
  },
};
1;
