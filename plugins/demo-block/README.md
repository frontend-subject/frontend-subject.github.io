# demo-block

## valina

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

## vue

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

## react

```jsx
export default function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box"></div>
  )
}

App.__style__ = `
  #box {
    border: 1px solid red;
  }
`
```
