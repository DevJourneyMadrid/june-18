<template>
  <div class="speaker-item">
    <div class="img">
      <!--<img src="@/assets/img/speakers/main.png" alt="user image">-->
    </div>
    <div class="speaker-info">
      <h6 class="name">{{ speaker.name }}</h6>
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
</template>
<script>
  export default {
    name: 'SpeakerData',
    props: {
      speaker: {
        required: true,
        type: Object,
      },
    },
    computed: {
      socialLinks() {
        return this.speaker.socialLinks;
      },
      hasSocialLinks() {
        try {
          return Object.keys( this.speaker.socialLinks ).length > 0;
        }
        catch ( e ) {
          return false;
        }
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .block-speaker
    margin-right 12px
    .img
      padding 0 10px
      img
        width 100%

  .speaker-info
    margin-top 10px
    .name
      font-weight lighter

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
