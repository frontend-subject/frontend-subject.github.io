import React, { useEffect, useState } from 'react'
import {
  getCodeFromVanilla,
  getCodeFromVue,
  getCodeFromReact,
} from '../../utils'
import { Runner } from '../runner'
import { Playground } from '../playground'
import { useThrottleFn } from 'ahooks'

const GET_CODE_FUNCTION = {
  vanilla: getCodeFromVanilla,
  vue: getCodeFromVue,
  react: getCodeFromReact,
}

function DemoBlock(props) {
  const [code, setCode] = useState(props.children)
  const [scope, setScope] = useState(null)
  const [runtimeCode, setRuntimeCode] = useState('')

  const handleCodeChange = useThrottleFn(
    (v) => {
      setCode(v)
    },
    { wait: 300 }
  )

  useEffect(() => {
    if (code !== props.children) {
      setCode(props.children)
    }
  }, [props.children])

  useEffect(() => {
    ;(async () => {
      const scope = await import(__dirname + '/../../scope.js')
      setScope(scope.default)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const runtimeCode = await GET_CODE_FUNCTION[props.metastring](code)
      setRuntimeCode(runtimeCode)
    })()
  }, [code])

  return (
    <div className="docusaurus-demo-block">
      <Playground
        type={props.metastring}
        value={code}
        onChange={(value) => handleCodeChange.run(value)}
      />
      <br />
      {scope && <Runner {...runtimeCode} scope={scope} />}
    </div>
  )
}

export { DemoBlock }
