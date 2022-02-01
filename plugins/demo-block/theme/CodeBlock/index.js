import React from 'react';
import CodeBlock from '@theme-init/CodeBlock';
import { DemoBlock } from '../../components/demo-block'

const withLiveEditor = (Component) => {
  function WrappedComponent(props) {
    const { vanilla, vue, react } = props;
    if (vanilla || vue || react) {
      return <DemoBlock {...props} />;
    }

    return <Component {...props} />;
  }

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);
