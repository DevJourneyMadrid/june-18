<template>
  <td :class="setCLass">
    <h5>{{ el.content.title }}</h5>
    <template v-if="el.type === 1">
      <p>{{ el.content.description }}</p>
    </template>
    <template v-else>
      <div class="cont">
        <div class="block-image">
          <img src="@/assets/img/speakers/speakerName.png">
        </div>
        <div class="block-content">
          <p>{{ el.content.description }}</p>
        </div>
      </div>
    </template>
  </td>
</template>
<script>
  export default {
    name: 'ContentSlot',
    props: {
      el: {
        required: true,
        type: Object,
      },
    },
    computed: {
      setCLass() {
        return this.el.type === 1 ? 'custom-hover-1' : 'custom-hover-2';
      },
    },
  };
</script>
<style lang="stylus">

  .custom-hover-1,
  .custom-hover-2,
  .custom-hover-1:hover,
  .custom-hover-2:hover
    transition: all 0.2s linear

  .custom-hover-1:hover
  .custom-hover-2:hover
    cursor pointer

  .custom-hover-1:hover
    box-shadow 0 6px 4px -4px inset #ddd

  .custom-hover-2:hover
    box-shadow 0 6px 4px -4px inset #42b983

  .cont
    display grid
    grid-template-columns 1fr 4fr
    .block-image
      img
        width 50px


</style>
