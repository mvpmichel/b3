<template>
  <div class="container-hb">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<script>
import Card from './Card'
export default {
    components: { Card },

}
</script>

<style lang="scss">
  .container-hb {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>