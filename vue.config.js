module.exports = 
{
  publicPath: 
    process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/',
  css: 
  {
    loaderOptions: 
    {
      sass: 
      {
        data: `@import "@/styles/global";`,
      },
    },
  },
  /* Required by vue-markdown-loader */
  chainWebpack(config)
  {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
};
1;
