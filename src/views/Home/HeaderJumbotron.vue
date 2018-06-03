<template>
  <header class="header">
    <div class="title-container pl-4 pr-4">
      <h1 class="fw-900">{{ data.title }}</h1>
      <h2>{{ data.subtitle }}</h2>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'HeaderJumbotron',
    props: {
      data: {
        required: true,
        type: Object,
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .header
    position relative
    background url("../../assets/img/bg1.jpg") no-repeat center center
    -webkit-background-size: cover
    background-size: cover
    display flex
    height 200px
    text-align center
    align-items center
    &:after
      content ''
      position absolute
      width 100%
      height 100%
      background-color black
      opacity .5
    .title-container
      display block
      width 100%
      z-index: 1;
      color white
      text-shadow: 1px 2px 4px #777;
      .fw-900
        font-weight 900
        letter-spacing 1px

</style>
