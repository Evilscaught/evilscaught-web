<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>