<template>
  <header class="header">
    <div class="title-container">
      <h1>Titulo</h1>
      <h3>Fecha</h3>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'HeaderJumbotron',
  };
</script>

<style lang="stylus">
  .header
    background url("../../assets/img/bg1.jpg") no-repeat center center
    -webkit-background-size: cover
    background-size: cover
    display flex
    height 200px
    text-align center
    align-items center
    border-bottom 1px solid #ddd
    .title-container
      display block
      width 100%
      text-shadow: 2px 2px 2px #f9fbff;

</style>
