<template>
  <div class="blog-page">
    <ImageBlock :text="text" classImage="img1"/>
    <PostList :posts="posts"/>
  </div>
</template>


<script>
  import ImageBlock from '@/components/ImageBlock.vue';
  import posts from './posts';
  import PostList from './PostList.vue';

  export default {
    created() {
      this.posts = posts;
    },
    components: {
      PostList,
      ImageBlock,
    },
    data() {
      return {
        posts: [],
        text: {
          title: 'Blog',
          subtitle: 'Dev Journey Madrid',
        },
      };
    },
  };
</script>
