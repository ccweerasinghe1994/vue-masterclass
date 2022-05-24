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
