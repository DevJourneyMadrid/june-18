<template>
  <div class="about">
    <ImageBlock imagePath="bg1" :text="text"/>
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
          title: 'Open Source Weekends',
          subtitle: '#OCSummit18',
        },
      };
    },
  };
</script>

<style lang="stylus" scoped>

</style>
