### Targeting by HTML Element or CSS Class

when we write css inside a vue component by default it will be global.
example

```js
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello I am learning vue</h1>
  <HelloWorld msg="I am learning Vue" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: purple;
}
</style>

```

this is our app.vue component
we are adding the h1 color option but this will apply to all h1 elements in the app.

![](../2.Intro_to_CSS_in_Vue/assets/images/1.png)

### The scoped Attribute

let's add the scoped to the App component

```html
<style scoped>
```

#### [vue css documentation](https://vuejs.org/api/sfc-css-features.html#scoped-css)

### A Little Housekeeping

let's remove the unnecessary files from our app

```vue
<template>
  <h1>Hello vue</h1>
</template>

<script>
export default {
  name: "App",
};
</script>
```
