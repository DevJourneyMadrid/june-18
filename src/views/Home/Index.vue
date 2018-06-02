<template>
  <div class="home">
    <HeaderJumbotron :data="info"/>
    <SubHeaderTickets :data="info"/>
    <Scheduler/>
  </div>
</template>

<script>

  import { eventInfo } from '@/data/index';
  import HeaderJumbotron from './HeaderJumbotron.vue';
  import SubHeaderTickets from './SubHeaderBlock.vue';
  import Scheduler from './Scheduler.vue';

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
      Scheduler,
      HeaderJumbotron,
      SubHeaderTickets,
    },
  };
</script>

