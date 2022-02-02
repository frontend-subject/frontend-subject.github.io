function getCodeFromVanilla(code) {
  let html = getTagContent(code, 'html')
  let css = getTagContent(code, 'style')
  let js = getTagContent(code, 'script')
  return { html, css, js }
}

async function getCodeFromVue(code) {
  let template = getTagContent(code, 'template')
  let css = getTagContent(code, 'style')
  let js = getTagContent(code, 'script')

  const Babel = await getBabel()
  const transformedScript = Babel.transform(js, {
    presets: [Babel.availablePresets.env],
  }).code

  const runtimeJs = `
    var comp = (function(exports){
      var module={};
      module.exports=exports;
      ${transformedScript};
      return module.exports.__esModule?module.exports.default:module.exports;
    })({});
    Vue.createApp(comp).mount(document.getElementById('app'))
  `

  return { html: `<div id="app">${template}</div>`, css, js: runtimeJs }
}

async function getCodeFromReact(code) {
  const Babel = await getBabel()
  const transformedScript = Babel.transform(code, {
      presets: ["es2015", "react"]
  }).code

  const runtimeJs = `
    var { App, style } = (function(exports){
      var module={};
      module.exports=exports;
      ${transformedScript};
      return module.exports;
    })({});
    document.body.innerHTML += "<style>" + style + "</style>";
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
  `

  return { html: `<div id="app"></div>`, css: '', js: runtimeJs }
}

function getTagContent(code, tag) {
  let result = code.match(new RegExp(`<${tag}>([\\s\\S]+)</${tag}>`, 'gim'))
  if (result) {
    result = result[0].replace(`<${tag}>`, '').replace(`</${tag}>`, '')
  }
  return result || ''
}

let babelPromise = null
function getBabel() {
  if (babelPromise) return babelPromise
  babelPromise = import('@babel/standalone').catch((err) => {
    babelPromise = null
    throw err
  })
  return babelPromise
}

function getType(metastring) {
  return metastring.split(' ')[0]
}

export { getCodeFromVanilla, getCodeFromVue, getCodeFromReact, getType }
