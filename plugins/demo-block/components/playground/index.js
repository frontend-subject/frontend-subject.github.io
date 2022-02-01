import React, { useRef, useEffect } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import style from './index.module.css'

let CodeMirror = null
if (ExecutionEnvironment.canUseDOM) {
  CodeMirror  = require('codemirror')

  require('codemirror/lib/codemirror.css')
  require('codemirror/addon/mode/overlay')
  require('codemirror/addon/mode/simple')
  require('codemirror/mode/css/css')
  require('codemirror/mode/htmlmixed/htmlmixed')
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/vue/vue')
  require('codemirror/mode/xml/xml')
  require('codemirror/mode/jsx/jsx')
}

const TYPED_OPTIONS = {
  vanilla: {
    mode: 'htmlmixed',
    htmlMode: true,
  },
  react: {
    mode: 'jsx'
  },
  vue: {
    mode: 'text/x-vue'
  }
}

function Playground({ value, onChange, type }) {
  const el = useRef(null)
  const editor = useRef(null)

  useEffect(() => {
    editor.current = CodeMirror(el.current, {
      value,
      lineNumbers: true,
      mode: 'htmlmixed',
      htmlMode: true,
      tabSize: 2,
      ...TYPED_OPTIONS[type]
    })
    editor.current.on('change', () => {
      onChange(editor.current.getValue())
    })
  }, [])

  return <div className={style.playground} ref={el} />
}

export { Playground }
