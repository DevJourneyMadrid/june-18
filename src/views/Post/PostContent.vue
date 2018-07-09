<template>
  <article class="post-card mb-3">
    <div class="wrapper">
      <div class="item item-1">
        <img :src="getImgUrl(post)" alt="main" width="100%">
      </div>
      <div class="item item-2">
        <h3 class="post-title mb-0">{{post.title}}</h3>
        <small class="post-meta">
          <span class="author">
            <a :href="post.meta.authorLink" target="_blank">{{ post.meta.authorName }}</a>
          </span>
          <span class="ml-2 mr-2">·</span>
          <span class="date">{{ post.meta.published }}</span>
        </small>
        <div class="content mt-2" v-html="post.content"></div>
      </div>
    </div>
  </article>
</template>
<script>
  export default {
    name: 'PostDetail',
    props: {
      post: { type: Object },
    },
    methods: {
      getImgUrl( post ) {
        // eslint-disable-next-line
        return `/img/blog/${post.id}/${post.image}`;
      },
    },
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
          text-decoration underline

      .post-meta
        color: #a6a49c
      .content
        color #899199
        font-weight 500
        a
          color #4dadf7
</style>
