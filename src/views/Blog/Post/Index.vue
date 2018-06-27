<template>
  <div class="blog-page">
    <ImageBlock :text="text" classImage="img1"/>
    <div class="container">
      <PostCard :post="post"/>
    </div>
  </div>
</template>


<script>
  import ImageBlock from '@/components/ImageBlock.vue';
  import PostCard from '../PostCard.vue';
  import post from '../posts';

  export default {
    created() {
      const { id } = this.$route.params;
      this.post = post[ id ];
      this.text.subtitle = this.post.title;
      fetch( '/file.html' )
        .then( res => res.text() )
        .then( ( res ) => {
          console.debug( res );
        } );
    },
    components: {
      ImageBlock,
      PostCard,
    },
    data() {
      return {
        post: [],
        text: {
          title: 'Blog',
          subtitle: '',
        },
      };
    },
  };
</script>

<style lang="stylus" scoped>
  .blog-page
    background-color #f2f3f5
</style>
