import React from 'react'
import CodeBlock from '@theme-init/CodeBlock'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { DemoBlock } from '../../components/demo-block'

const withLiveEditor = (Component) => {
  function WrappedComponent(props) {
    const { vanilla, vue, react } = props
    if (vanilla || vue || react) {
      return (
        <BrowserOnly fallback={'加载中...'}>
          {() => <DemoBlock {...props} />}
        </BrowserOnly>
      )
    }

    return <Component {...props} />
  }

  return WrappedComponent
}

export default withLiveEditor(CodeBlock)
