<template>
  <article class="post-card mb-3" @click="goTo(post.slug)">
    <div class="wrapper">
      <div class="item item-1">
        <img :src="getImgUrl(post)" alt="main" width="100%">
      </div>
      <div class="item item-2">
        <h3 class="post-title">{{post.title}}</h3>
        <div class="content" v-html="post.content"></div>
      </div>
    </div>
  </article>
</template>
<script>
  export default {
    name: 'PostCard',
    props: {
      post: {
        required: true,
        type: Object,
      },
    },
    methods: {
      getImgUrl( post ) {
        // eslint-disable-next-line
        return require( `../../assets/img/blog/${post.id}/${post.image}` );
      },
      goTo( slug ) {
        this.$router.push( { name: 'post', params: { id: slug } } );
      },
    },
    computed: {},
  };
</script>

<style lang="stylus">
  .post-card
    box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, .05);
    background-color #fff

    .item-2
      padding 20px
      .post-title
        color #717171
      .content
        color #899199
        font-weight 500
        a
          color #4dadf7
</style>
