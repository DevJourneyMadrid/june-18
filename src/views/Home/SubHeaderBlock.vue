<template>
  <section class="sub-header">
    <div class="container">
      <div class="block">
        <p class="shadow-text mt-0 mb-0 mr-4">
          Consigue tu entrada GRATIS con este código:
          <span class="badge badge-pill badge-secondary">{{ data.ticketCode }}</span>
        </p>
        <router-link to="/tickets" class="btn btn-outline-primary btn custom-btn" role="button"> {{ data.callToActionMsg }} </router-link>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'SubHeaderBlock',
    props: {
      data: {
        required: true,
        type: Object,
      },
    },
  };
</script>

<style lang="stylus">
  .sub-header
    // background: #4776E6;

    .block
      position relative
      display flex
      align-items center
      justify-content flex-end
      padding 15px 0

      .btn.custom-btn
        border-width 3px
        font-weight bolder

      .shadow-text
        color #333
        letter-spacing 1px
        font-size 17px
        font-weight 500
        span
          text-shadow none

</style>
