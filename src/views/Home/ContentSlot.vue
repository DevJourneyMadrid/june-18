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
            <img src="@/assets/img/speakers/image.png" alt="user image">
          </div>
          <div class="speaker-info">
            <h6 class="name">{{ el.content.speaker.name }}</h6>
            <div class="social-links" v-if="hasSocialLinks">
              <ul class="list-inline">
                <li class="list-inline-item" v-for="(value, key, idx) in socialLinks" :key="idx">
                  <a :href="value" target="_blank" :class="key">
                    <template v-if="key === 'github'">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </template>
                    <template v-if="key === 'twitter'">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </template>
                    <template v-if="key === 'linkedin'">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </template>
                    <template v-if="key === 'website'">
                      <i class="fa fa-link" aria-hidden="true"></i>
                    </template>
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
      socialLinks() {
        return this.el.content.speaker.socialLinks;
      },
      hasSocialLinks() {
        try {
          return Object.keys( this.el.content.speaker.socialLinks ).length > 0;
        }
        catch ( e ) {
          return false;
        }
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

  .social-links
    a.github
      color: #24292f
    a.twitter
      color #1da1f3
    a.linkedin
      color #0077b5
    a.website
      color: #41b883

</style>
