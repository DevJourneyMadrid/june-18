<template>
  <footer class="bg-light mb-0">
    <div class="container">
      <div class="links d-flex justify-content-center">
        <ul class="list-inline">
          <li class="list-inline-item" v-for="(link, i) in linksList" :key="i">
            <a :href="link.to">{{ link.displayName }}</a>
          </li>
        </ul>
      </div>
      <div class="credit text-center">
        <div class="block">
          <p class="mb-0 el-cursor text-muted">
            <i class="fa fa-code text-primary" aria-hidden="true"></i>
            by <b>Jorge Baumann</b> with
            <i class="fa fa-heart-o text-danger" aria-hidden="true"></i>
          </p>
          <ul class="list-inline social-links">
            <li class="list-inline-item">
              <a href="https://twitter.com/baumannzone" class="twitter">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/baumannzone" class="github">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterLinks',
    data() {
      return {
        info: {},
        linksList: [
          { displayName: 'Github', to: 'https://github.com/DevJourneyMadrid/june-18' },
          { displayName: '#DJM', to: 'https://github.com/DevJourneyMadrid' },
          { displayName: 'Entradas', to: 'https://devjourneymadrid18.eventbrite.es' },
        ],
      };
    },
  };
</script>

<style lang="stylus" scoped>
  footer
    border-top 8px solid #4dadf7
    min-height 150px
    padding-top 20px
    padding-bottom 20px

  .links
    a
      color: #333
      font-weight bolder
      margin-right 15px

  .el-cursor
    cursor url("../assets/img/cursor.png") , auto;

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
