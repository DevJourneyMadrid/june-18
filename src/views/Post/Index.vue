<template>
  <div class="post-page">
    <ImageBlock :text="text" classImage="bg-1"/>
    <br>
    <div class="container">
      <PostContent class="p-2" :post="post"/>
    </div>
  </div>
</template>


<script>
  import ImageBlock from '@/components/ImageBlock.vue';
  import PostContent from './PostContent.vue';
  import post from '../../data/posts';

  export default {
    created() {
      const { id } = this.$route.params;
      this.post = post[ id ];
      this.text.subtitle = this.post.title;
    },
    components: {
      ImageBlock,
      PostContent,
    },
    data() {
      return {
        post: {},
        text: {
          title: 'Blog',
          subtitle: '',
        },
      };
    },
  };
</script>

<style lang="stylus" scoped>
  .post-page
    background-color #f2f3f5
</style>
