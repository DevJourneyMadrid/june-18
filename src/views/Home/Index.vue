<template>
  <div class="home">
    <!--<img src="../assets/logo.png">-->
    <HeaderJumbotron/>
    <Scheduler/>
  </div>
</template>

<script>

  import HeaderJumbotron from './HeaderJumbotron.vue';
  import Scheduler from './Scheduler.vue';

  export default {
    name: 'home',
    components: {
      Scheduler,
      HeaderJumbotron,
    },
  };
</script>

