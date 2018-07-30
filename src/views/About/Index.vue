<template>
  <div class="about">
    <ImageBlock imageName="bg1.jpg" :text="text"/>
    <InfoBlock/>
    <TextBlock/>
  </div>
</template>

<script>

  import ImageBlock from '@/components/ImageBlock.vue';
  import TextBlock from './TextBlock.vue';
  import InfoBlock from './InfoBlock.vue';

  export default {
    components: { InfoBlock, TextBlock, ImageBlock },
    data() {
      return {
        text: {
          title: 'Dev Journey Madrid',
          subtitle: '#DJM18',
        },
      };
    },
  };
</script>

<style lang="stylus" scoped>

</style>
