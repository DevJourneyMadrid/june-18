<template>
  <section class="post-list pt-5 pb-5">
    <div class="container" v-for="(post, i) in posts" :key="i">
      <PostCard :post="post"/>
    </div>
  </section>
</template>

<script>
  import PostCard from './PostCard.vue';

  export default {
    name: 'PostList',
    components: { PostCard },
    props: {
      posts: {
        required: true,
        type: Array,
      },
    },
    data() {
      return {
        img: [],
      };
    },
    methods: {
      goTo( slug ) {
        this.$router.push( { name: 'post', params: { id: slug } } );
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .post-list
    background-color: #f2f3f5
</style>
