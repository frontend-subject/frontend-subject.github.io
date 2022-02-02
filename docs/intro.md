---
sidebar_position: 1
---

```html vanilla live=false horizontal=false
<html>
  <div id="box">box</div>
</html>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
const box = document.getElementById('box');
</script>
```

```html vue
<template>
  <div id="box">{{ foo }}</div>
</template>

<script>
  export default {
    data() {
      return {
        foo: "foo"
      }
    },
    created () {
      console.log('created')
    }
  }
</script>

<style>
  #box {
    border: 1px solid red;
  }
</style>
```

```html vue
<template>
  <div id="box">1</div>
</template>

<script>
  module.exports = {
    created () {
      console.log('created')
    }
  }
</script>

<style>
  #box {
    border: 1px solid red;
  }
</style>
```
