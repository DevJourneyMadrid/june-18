<template>
  <td :class="setCLass">
    <template v-if="el.type === 1">
      <h5>{{ el.content.title }}</h5>
      <p>{{ el.content.description }}</p>
    </template>
    <template v-else>
      <div class="cont">
        <div class="block-image">
          <div class="img">
            <img src="@/assets/img/speakers/speakerName.png">
          </div>
          <div class="speaker-info">
            <h6 class="name">{{ el.content.speaker.name }}</h6>
            <div class="social-links">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="block-content">
          <h5>{{ el.content.title }}</h5>
          <p>{{ el.content.description }}</p>
        </div>
      </div>
      <div class="tags">
            <span class="badge badge-pill badge-primary"
                  v-for="(tag, i) in el.content.tags"
                  :key="i"> {{ tag }}
            </span>
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
    grid-template-columns 150px 1fr
    .block-image
      margin-right 12px
      .img
        img
          width 100%
          height 100%

    .speaker-info
      margin-top 10px
      .name
        font-weight lighter

  .tags
    display flex
    justify-content flex-end
    .badge
      margin-left 3px


</style>
