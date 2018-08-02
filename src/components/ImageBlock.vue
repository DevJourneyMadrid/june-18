<template>
  <header class="header" :style="[bgStyles, styles]">
    <div v-if="text" class="title-container pl-4 pr-4">
      <h1 class="fw-900" v-if="text.title">{{ text.title }}</h1>
      <h2 v-if="text.subtitle">{{ text.subtitle }}</h2>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'ImageBlock',
    props: {
      imageName: {
        required: false,
        type: String,
      },
      text: {
        required: false,
        type: Object,
      },
      colorCode: {
        required: false,
        type: String,
        default: '#03b2f7',
      },
    },
    data() {
      return {
        styles: {
          '-webkit-background-size': 'cover',
          'background-size': 'cover',
        },
      };
    },
    computed: {
      bgStyles() {
        // Image from `/public` folder
        let obj = {};
        if ( this.imageName && this.imageName.trim() ) {
          obj = {
            background: `url("/img/bg/${this.imageName}") no-repeat center center`,
          };
        }
        else {
          obj = {
            background: this.colorCode,
          };
        }
        return obj;
      },
    },
  };
</script>
<style lang="stylus" scoped>
  .header
    position relative
    display flex
    height 200px
    text-align center
    align-items center
    &.img1
      background url("../assets/img/bg1.jpg") no-repeat center center
      -webkit-background-size: cover
      background-size: cover
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
