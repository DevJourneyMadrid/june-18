<template>
  <section class="count-down-timer">
    <div class="container">
      <div class="timer">
        <div class="block">
          <div class="bg">
            <span class="digit">{{ days }}</span>
            <span class="text">Días</span>
          </div>
        </div>
        <div class="block">
          <div class="bg">
            <span class="digit">{{ hours }}</span>
            <span class="text">Horas</span>
          </div>
        </div>
        <div class="block">
          <div class="bg">
            <span class="digit">{{ minutes }}</span>
            <span class="text">Minutos</span>
          </div>
        </div>
        <div class="block">
          <div class="bg">
            <span class="digit">{{ seconds }}</span>
            <span class="text">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'CountDownTimer',
    props: {
      format: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
    created() {
      this.checkTimer();
      this.startCountDown();
    },
    data() {
      return {
        now: new Date(),
        showTimer: true,
      };
    },
    methods: {
      checkTimer() {
        const now = this.$moment( this.now );
        const start = this.$moment( this.date, this.format );
        this.showTimer = now.isBefore( start );
      },
      startCountDown() {
        window.setInterval( () => {
          this.now = new Date();
          this.checkTimer();
        }, 1000 );
      },
    },
    computed: {
      seconds() {
        if ( this.showTimer ) {
          return ( this.$moment( this.date, this.format ).diff( this.$moment( this.now ), 'seconds' ) % 60 );
        }
        return 0;
      },
      minutes() {
        if ( this.showTimer ) {
          return ( this.$moment( this.date, this.format ).diff( this.$moment( this.now ), 'minutes' ) % 60 );
        }
        return 0;
      },
      hours() {
        if ( this.showTimer ) {
          return ( this.$moment( this.date, this.format ).diff( this.$moment( this.now ), 'hours' ) % 24 );
        }
        return 0;
      },
      days() {
        if ( this.showTimer ) {
          return this.$moment( this.date, this.format ).diff( this.$moment( this.now ), 'days' );
        }
        return 0;
      },
    },
  };
</script>

<style lang="stylus">
  .count-down-timer
    padding-top 20px
    padding-bottom 20px
    background-color #f8f9fa

  .timer
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr
    grid-auto-columns 1fr
    grid-gap 15px
    .block
      grid-row: 1
      text-align center
      .bg
        background-color #fff
        border-radius 4px
        box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, .05);
      span
        display block
        font-family monospace
        font-weight 800
        &.digit
          font-size 3rem
          color #2489e6
        &.text
          padding-right 5px
          padding-left 5px
          padding-bottom 10px
          color #adb5bd
</style>
