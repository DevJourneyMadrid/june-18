<template>
  <header class="header" itemscope itemtype="http://schema.org/Event">
    <div class="title-container pl-4 pr-4">
      <h1 class="fw-900" itemprop="name">{{ data.title }}</h1>
      <h2>{{ data.subtitle }}</h2>
      <time itemprop="startDate" datetime="2018-06-09"></time>
      <time itemprop="endDate" datetime="2018-06-09"></time>
      <div itemprop="location" itemscope itemtype="http://schema.org/Place">
        <span itemprop="name">Campus Madrid</span>
        <span class="mr-2 ml-2">-</span>
        <span class="mr-2" itemprop="streetAddress">C/ Moreno Nieto 2</span>
        <span itemprop="addressLocality">(Madrid)</span>
      </div>
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
