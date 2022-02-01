const path = require('path')
const webpack = require('webpack')
const {
  readDefaultCodeTranslationMessages,
} = require('@docusaurus/theme-translations')

module.exports = function demoBlock(context) {
  const {
    i18n: { currentLocale },
  } = context

  return {
    name: 'docusaurus-plugin-demo-block',

    getThemePath() {
      return path.resolve(__dirname, './theme')
    },

    getDefaultCodeTranslationMessages() {
      return readDefaultCodeTranslationMessages({
        locale: currentLocale,
        name: 'plugin-demo-block',
      })
    },

    configureWebpack(config) {
      return {
        resolve: {
          fallback: {
            path: require.resolve('path-browserify'),
            assert: require.resolve('assert/'),
            buffer: require.resolve('buffer/'),
          },
          alias: {
            'vue': require.resolve('vue/dist/vue.esm-bundler.js'),
          }
        },
        plugins: [
          new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
          }),
        ]
      }
    },
  }
}
