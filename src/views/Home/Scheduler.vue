<template>
  <section class="schedule">
    <div class="container">
      <h3 class="title">Programación del Evento</h3>

    </div>
  </section>
</template>
<script>
  export default {
    name: 'Scheduler',
    created() {

    },
    data() {
      return {
        rooms: [],
      };
    },
  };
</script>

<style lang="stylus">
  .schedule
    margin 20px 0
    .title
      text-align center
</style>
