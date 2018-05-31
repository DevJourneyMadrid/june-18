<template>
  <header>
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
  header
    display flex
    height 200px
    text-align center
    align-items center
    border-bottom 1px solid #ddd
    .title-container
      display block
      width 100%

</style>
