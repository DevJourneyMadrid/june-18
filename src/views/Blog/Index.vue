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
      // fetch( '/blogData/0.html' )
      //   .then( res => res.text() )
      //   .then( ( res ) => {
      //     const lastpost = JSON.parse( JSON.stringify( posts[ 0 ] ) );
      //     lastpost.title = 'by Robin';
      //     lastpost.meta.description = res;
      //     posts[ 1 ] = lastpost;
      //     console.log( posts );
      //     this.posts = posts;
      //   } );
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
