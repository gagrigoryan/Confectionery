module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/_variables.sass"`,
      },
    },
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
      ? '/confectionery/'
      : '/',
}