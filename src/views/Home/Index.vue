<template>
  <div class="home">
    <HeaderJumbotron/>
    <SubHeaderTickets/>
    <Scheduler/>
  </div>
</template>

<script>

  import HeaderJumbotron from './HeaderJumbotron.vue';
  import SubHeaderTickets from './SubHeaderBlock.vue';
  import Scheduler from './Scheduler.vue';

  export default {
    name: 'home',
    components: {
      Scheduler,
      HeaderJumbotron,
      SubHeaderTickets,
    },
  };
</script>

