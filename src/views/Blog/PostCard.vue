<template>
  <article class="post-card mb-3">
    <div class="wrapper">
      <div class="item item-1 cursor-hand" @click="goTo(post.slug)">
        <img :src="getImgUrl(post)" alt="main" width="100%">
      </div>
      <div class="item item-2">
        <h3 class="post-title cursor-hand mb-0" @click="goTo(post.slug)">{{post.title}}</h3>
        <small class="post-meta">
          <span class="author">
            <a :href="post.meta.authorLink" target="_blank">{{ post.meta.authorName }}</a>
          </span>
          <span class="ml-2 mr-2">·</span>
          <span class="date">{{ post.meta.published }}</span>
        </small>
        <div class="content mt-2" v-html="post.meta.description"></div>
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
  .cursor-hand
    cursor pointer
  .post-card
    box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, .05);
    background-color #fff
    border-top-left-radius 10px
    border-top-right-radius 10px


    .item-1
      img
        border-top-left-radius 10px
        border-top-right-radius 10px


    .item-2
      padding 25px
      .post-title
        color #444
        font-weight 600
        &:hover
          border-bottom 1px solid black

      .post-meta
        color: #a6a49c
      .content
        color #899199
        font-weight 500
        a
          color #4dadf7
</style>
