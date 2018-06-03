<template>
  <div class="home">
    <HomeHeader :data="info"/>
    <CountDownTimer :format="info.startTimeFormat" :date="info.startTime"/>
    <HomeSubHeader :data="info"/>
    <AboutBlock/>
    <HomeScheduleBlock/>
  </div>
</template>

<script>
  import { eventInfo } from '@/data/index';
  import HomeHeader from './HomeHeaderBlock.vue';
  import HomeSubHeader from './HomeSubHeaderBlock.vue';
  import HomeScheduleBlock from './HomeScheduleBlock.vue';
  import AboutBlock from './HomeAboutBlock.vue';
  import CountDownTimer from './HomeCountDownTimer.vue';

  export default {
    name: 'home',
    created() {
      this.info = eventInfo;
    },
    data() {
      return {
        info: {},
      };
    },
    components: {
      CountDownTimer,
      AboutBlock,
      HomeScheduleBlock,
      HomeHeader,
      HomeSubHeader,
    },
  };
</script>

