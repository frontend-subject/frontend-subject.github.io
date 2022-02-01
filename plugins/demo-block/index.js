const path = require('path');
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
  }
}
