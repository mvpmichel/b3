<template>
  <div id="app">
    <NavHeader />
    <HomeBroker />
  </div>
</template>

<script>

import NavHeader from './components/NavHeader'
import HomeBroker from './components/HomeBroker'

export default {
  components: { NavHeader, HomeBroker }
}

</script>


<style lang="scss">
body {
  background-color: black;
}
  #app {
   
    margin: auto;
    background-color: lightgray;
    height: 100vh;
  }
</style>
