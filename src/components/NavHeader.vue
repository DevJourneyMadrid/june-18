<template>
  <div id="nav">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/osw-logo.png" alt="osw logo">
        </router-link>
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
          { displayName: 'About', to: '/about' },
        ],
      };
    },
  };
</script>

<style lang="stylus" scoped>

  .wrapper
    display flex
    justify-content space-between

  #nav
    padding 10px 20px
    background-color #fafafa

    .logo
      img
        height 40px

    .items
      display flex
      align-items center
    ul
      margin-bottom 0
      padding-left 0
    li
      display inline-block
      list-style none
      margin-left 20px
      /*font-size 22px*/
      a
        font-weight bold
        color #2c3e50
        transition: all 0.2s ease
        &:hover
          text-decoration none
          border-bottom 3px solid #2c3e50
        &.router-link-exact-active
          color #4dadf7

</style>
