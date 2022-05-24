- [User Story](#user-story)
- [Creating the MainNav Component](#creating-the-mainnav-component)
- [Rendering Child Component with the components Property](#rendering-child-component-with-the-components-property)
- [Different Ways to Render a Vue Component](#different-ways-to-render-a-vue-component)
- [Update Tailwind Styles](#update-tailwind-styles)
- [CSS Styling the MainNav Component](#css-styling-the-mainnav-component)
- [CSS Styling Our Company Name](#css-styling-our-company-name)
- [BONUS JavaScript Objects, Properties and Methods](#bonus-javascript-objects-properties-and-methods)
- [Rendering Data to View I](#rendering-data-to-view-i)
- [Rendering Data to View II](#rendering-data-to-view-ii)

### User Story

**st-01**

as a user i like to navigate through the site

### Creating the MainNav Component

let's create a new component called `MainNav`

```vue
<template>
  <header>Main Nav</header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
```

### Rendering Child Component with the components Property

let's add the `MainNav` component to the `App` component

```vue
<template>
  <MainNav />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
```

### Different Ways to Render a Vue Component

same out put as before

```vue
<template>
  <MainNav />
  <MainNav></MainNav>
  <main-nav></main-nav>
  <main-nav />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
```

### Update Tailwind Styles

### CSS Styling the MainNav Component

### CSS Styling Our Company Name

### BONUS JavaScript Objects, Properties and Methods

### Rendering Data to View I

### Rendering Data to View II
