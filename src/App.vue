<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <explorer/>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Explorer from './components/Explorer.vue';

export default 
{
  name: "App",
  components: 
  {
    Nav,
    Explorer,
  }
};
</script>