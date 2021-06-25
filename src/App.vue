<template>
  <the-header></the-header>
  <router-view />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
