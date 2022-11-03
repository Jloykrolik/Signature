<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/signature-logo-01.png" height="150">
    <Signature />
  </div>
</template>

<script>
import Signature from './components/Signature.vue'

export default {
  name: 'App',
  components: {
    Signature
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D2D4DE;
  margin-top: 20px;
}
body {
  background: #1C2527;
}
</style>
