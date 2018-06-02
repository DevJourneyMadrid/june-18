<template>
  <td :class="setCLass">
    <template v-if="el.type === 1">
      <h5>{{ el.content.title }}</h5>
      <p>{{ el.content.description }}</p>
    </template>
    <template v-else>
      <div class="cont">
        <div class="block-speaker">
          <div class="speaker-list" v-for="(speaker, index) in el.content.speakers" :key="index">
            <SpeakerData :speaker="speaker"/>
          </div>
        </div>
        <div class="block-content">
          <h5>{{ el.content.title }}</h5>
          <p>{{ el.content.description }}</p>
        </div>
      </div>
      <div class="tags" v-if="hasTags">
            <span class="badge badge-pill badge-primary"
                  v-for="(tag, i) in el.content.tags"
                  :key="i"> {{ tag }}
            </span>
      </div>
    </template>
  </td>
</template>

<script>
  import SpeakerData from './SpeakerData.vue';

  export default {
    name: 'ContentSlot',
    components: { SpeakerData },
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
      hasTags() {
        try {
          return this.el.content.tags.length > 0;
        }
        catch ( e ) {
          return false;
        }
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
    box-shadow 0 6px 4px -4px inset #ddd

  .custom-hover-2:hover
    box-shadow 0 6px 4px -4px inset #42b983

  .cont
    display grid
    grid-template-columns 150px 1fr

  .tags
    display flex
    justify-content flex-end
    .badge
      margin-left 3px

</style>
