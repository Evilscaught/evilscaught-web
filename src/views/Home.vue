<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <img alt="Vue logo" src="../assets/logo.png" class="my-4" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
