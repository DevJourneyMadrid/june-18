<template>
  <section class="sub-header">
    <div class="container">
      <div class="block">
        <p class="shadow-text mt-0 mb-0 mr-5">
          Consigue tu entrada GRATIS con este código:
          <span class="badge badge-pill badge-light">GOE18250</span>
        </p>
        <router-link to="/tickets"> Comprar entrada </router-link>
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
      display flex
      align-items center
      justify-content flex-end

      .shadow-text:not(span)
        text-shadow: 1px 1px 2px white
        font-size 17px
        font-weight 500
        span
          text-shadow none

      a
        text-align center
        text-shadow: 1px 1px 2px #999
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
          text-shadow: 1px 1px 2px #fafafa


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
