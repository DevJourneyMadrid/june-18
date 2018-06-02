<template>
  <section class="sub-header">
    <div class="container">
      <div class="block">
        <router-link to="/tickets"> Comprar Entradas</router-link>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'HeaderJumbotron',
  };
</script>

<style lang="stylus">
  .sub-header
    background: #42b983;

    -webkit-animation: changebackground 16s infinite;
    -moz-animation: changebackground 16s infinite;
    -o-animation: changebackground 16s infinite;
    animation: changebackground 16s infinite;

    .block
      position relative
      /*height 50px*/
      display flex
      align-items center
      justify-content flex-end
      a
        padding 8px 20px
        margin-top 10px
        margin-bottom 10px
        color white
        font-weight 700
        font-size 20px
        border 2px solid #fafafa
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        -webkit-transition: all .25s
        -moz-transition: all .25s
        -ms-transition: all .25s
        -o-transition: all .25s
        transition: all .25s
        &:hover
          color darkgreen
          text-decoration none
          border-color darkgreen


  @-webkit-keyframes changebackground {
    0% {
      background: #42b983;
    }
    50% {
      background: #5ce095;
    }
    100% {
      background: #42b983;
    }
  }

</style>
