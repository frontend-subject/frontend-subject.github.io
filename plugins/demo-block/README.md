# demo-block

## language support

### vanilla

```html
<html>
  <div id="box"></div>
</html>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
const box = document.getElementById('box');
console.log(box)
</script>
```

### vue

```html
<template>
  <div id="box"></div>
</template>

<script>
  export default {
    mounted () {
      console.log('mounted')
    }
  }
</script>

<style>
  #box {
    border: 1px solid red;
  }
</style>
```

### react

```jsx
export function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box"></div>
  )
}

export const style = `
  #box {
    border: 1px solid red;
  }
`
```

## import

### global import

```js title="scope.js"
import lodash from 'lodash'

export default {
  lodash
}
```

### local import for codepen

#### react

```jsx
import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'

export function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box"></div>
  )
}

export const style = `
  #box {
    border: 1px solid red;
  }
`
```

#### vue

```html
<template>
  <div id="box"></div>
</template>

<script>
  import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'

  export default {
    mounted () {
      console.log('mounted')
    }
  }
</script>

<style>
  #box {
    border: 1px solid red;
  }
</style>
```

#### vanilla

```html
<html>
  <div id="box"></div>
</html>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'

const box = document.getElementById('box');
console.log(box)
</script>
```

### local import for local use

#### react

```jsx
import lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'

export function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box"></div>
  )
}

export const style = `
  #box {
    border: 1px solid red;
  }
`
```

### local import with deconstruct

#### react

```jsx
import { debounce } from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'

export function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box"></div>
  )
}

export const style = `
  #box {
    border: 1px solid red;
  }
`
```

## settings

### global settings

```js
{
  babel: true, // 是否使用 babel 解析脚本，默认启用
  lib: { // 声明基础库对应的全局变量，用于 import { bar, baz } from 'foo'
    'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js': 'Lodash'
  },
  jsfiddle: false, // 支持跳转到 jsfiddle
  codepen: false, // 支持跳转到 codepen
  codesandbox: false, // 支持跳转到 codesandbox
  live: false, // 支持实时编辑
  horizontal: false, // 横向布局
}
```

### local settings

### vanilla 

```js

` ``html vanilla live=false&horizontal=false
// xxx
` ``

```
