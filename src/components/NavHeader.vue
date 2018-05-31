<template>
  <div id="nav">
    <div class="wrapper">
      <div class="logo">
        Logo
      </div>
      <div class="items">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.to"> {{ link.displayName }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavHeader',
    data() {
      return {
        navLinks: [
          { displayName: 'Home', to: '/' },
          { displayName: 'Speakers', to: '/speakers' },
        ],
      };
    },
  };
</script>
<style lang="stylus">

  .wrapper
    display flex
    justify-content space-between

  #nav
    padding 20px
    background-color #fafafa

    ul
      margin-bottom 0
      padding-left 0
    li
      display inline-block
      list-style none
      margin-left 20px
      a
        font-weight bold
        color #2c3e50
        &.router-link-exact-active
          color #42b983

</style>
