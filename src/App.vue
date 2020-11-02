<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <Header class="border-b"/>
    <router-view :key="$route.fullPath"></router-view>
    <Footer class="w-full" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
@import "./assets/bootstrap-grid.css";

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
