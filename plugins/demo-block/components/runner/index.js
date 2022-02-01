import React, { useEffect, useRef, memo } from 'react';
let key = 1

function RunnerComp ({ html, css, js, scope }) {
  const iframe = useRef(null)
  
  useEffect(() => {
    const { contentDocument, contentWindow } = iframe.current;
    if (scope) {
      Object.keys(scope).forEach(key => {
        contentWindow[key] = scope[key]
      })
    }
    contentDocument.body.innerHTML = `${html}<style>${css}</style>`
    const script = contentDocument.createElement('script');
    script.innerHTML = js
    contentDocument.body.appendChild(script)
    
  }, [html, css, js, scope])
  return <iframe key={key++} ref={iframe} />
}

const Runner = memo(RunnerComp)

export { Runner }
