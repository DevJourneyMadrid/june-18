<template>
  <div class="post-page">
    <ImageBlock :text="text" classImage="bg-1"/>
    <br>
    <div class="container mt-3">
      <PostContent
        :post="postData"
        :prev="prev"
        :next="next"
        @eventaso="eventaso"/>
      <br>
    </div>
  </div>
</template>


<script>
  import ImageBlock from '@/components/ImageBlock.vue';
  import PostContent from './PostContent.vue';
  import posts from '../../data/posts';

  export default {
    created() {
      this.postId = this.$route.params.id;
      this.postData = posts[ this.postId ];
      this.text.subtitle = this.postData.title;
      this.setPrevNextBtn();
    },
    components: {
      ImageBlock,
      PostContent,
    },
    data() {
      return {
        postId: '',
        post: {},
        text: {
          title: 'Blog',
          subtitle: '',
        },
        prev: {},
        next: {},
      };
    },
    methods: {
      setPrevNextBtn() {
        const numberId = Number( this.postId );
        const size = posts.length;
        const prev = {
          id: null,
          slug: null,
          isDisabled: true,
        };
        const next = {
          id: null,
          slug: null,
          isDisabled: true,
        };
        if ( size > 1 ) {
          try {
            if ( numberId === posts[ 0 ].id ) {
              next.id = numberId + 1;
              next.slug = posts[ numberId + 1 ].slug;
              next.isDisabled = false;
            }
            else if ( numberId === posts[ size - 1 ].id ) {
              prev.id = numberId - 1;
              prev.slug = posts[ numberId - 1 ].slug;
              prev.isDisabled = false;
            }
            else {
              next.id = numberId + 1;
              next.slug = posts[ numberId + 1 ].slug;
              next.isDisabled = false;
              prev.id = numberId - 1;
              prev.slug = posts[ numberId - 1 ].slug;
              prev.isDisabled = false;
            }
          }
          catch ( e ) {
            console.warn( 'Err prev / next btn: ', e );
          }
        }

        this.prev = { ...prev };
        this.next = { ...next };
      },
      eventaso( data ) {
        this.$router.push( { name: 'post', params: { id: data.id, slug: data.slug } } );
      },
    },
    // Update data on post change
    beforeRouteUpdate( to, from, next ) {
      window.scrollTo( 0, 0 );
      this.postId = to.params.id;
      this.postData = posts[ this.postId ];
      this.text.subtitle = this.postData.title;
      this.setPrevNextBtn();
      next();
    },
  };
</script>

<style lang="stylus" scoped>
  .post-page
    background-color #f2f3f5
</style>
