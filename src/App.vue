<template>
  <div id="app">
    <NavHeader/>
    <Layout>
      <template slot="main">
        <router-view/>
      </template>
    </Layout>
  </div>
</template>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50


</style>

<script>
  import NavHeader from './components/NavHeader.vue';
  import Layout from './layouts/main.vue';

  export default {
    components: {
      NavHeader,
      Layout,
    },
  };
</script>
