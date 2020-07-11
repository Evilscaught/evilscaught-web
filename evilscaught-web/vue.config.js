// vue.config.js file to be place in the root of your repository

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/'
}
