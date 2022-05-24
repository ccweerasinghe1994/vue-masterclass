- [User Story](#user-story)
- [Creating the MainNav Component](#creating-the-mainnav-component)
- [Rendering Child Component with the components Property](#rendering-child-component-with-the-components-property)
- [Different Ways to Render a Vue Component](#different-ways-to-render-a-vue-component)
- [Update Tailwind Styles](#update-tailwind-styles)
- [CSS Styling the MainNav Component](#css-styling-the-mainnav-component)
- [CSS Styling Our Company Name](#css-styling-our-company-name)
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

let's add some extra colors to the project `tailwind.config.js`

```js
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
```

### CSS Styling the MainNav Component

```vue
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white"></div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
```

### CSS Styling Our Company Name

```vue
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="" class="flex items-center h-full text-xl">Bobo Careers</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
```

output
![](./assets/images/1.png)

### Rendering Data to View I

```vue
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="" class="flex items-center h-full text-xl">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Bobo Careers",
    };
  },
};
</script>
```

### Rendering Data to View II

nested objects

```vue
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="" class="flex items-center h-full text-xl">{{ company }}</a>
        <h2 class="flex h-full items-center ml-8">
          Develop By {{ author.firstName }} {{ author.lastName }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Bobo Careers",
      author: {
        firstName: "Chamara",
        lastName: "Weerasinghe",
      },
    };
  },
};
</script>
```
