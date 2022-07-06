- [1. Cleaning up App.vue](#1-cleaning-up-appvue)
- [2. Intro to Vue Test Utils](#2-intro-to-vue-test-utils)
- [3. Our First Vue Test](#3-our-first-vue-test)
- [4. The Second Argument to Mount Function](#4-the-second-argument-to-mount-function)
- [5. The setData Method](#5-the-setdata-method)

### 1. Cleaning up App.vue

let's clean up our `MainNav.vue` file.

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

### 2. Intro to Vue Test Utils

lets create a test file name `MainNav.test.js` and add the following code:

```js
import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    console.log(wrapper.html());
  });
});
```

output

```html
console.log
<header class="w-full text-sm">
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <a href="" class="flex items-center h-full text-xl">Bobo Careers</a>
    </div>
  </div>
</header>
```

### 3. Our First Vue Test

```js
import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
});
```

### 4. The Second Argument to Mount Function

```js
import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
});
```

this will fail.
this is not a good test because it is showing to much internal information.
this test is tied to the implementation of the props not the final output.

### 5. The setData Method

this is also a bad test because it is tied to the implementation of the props not the final output.

```js
import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({ company: "Test Company" });
    expect(wrapper.text()).toMatch("Test Company");
  });
});
```

this is not the real implementation but a artificial one.
