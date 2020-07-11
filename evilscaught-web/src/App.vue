<!-- 
    Author:             Scott McKay
    Date Created:       Thursday, July 9th, 2020 
    -->

<template>
    <div id="app">
        <Away />
        <Home />
    </div>
</template>

<script>
    import Home from './pages/Home.vue';
    import Away from './components/Away.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Away
        }
    };
</script>

<style>
</style>

