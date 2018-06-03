<template>
  <section class="schedule">
    <div class="container">
      <h2 class="title text-uppercase">Agenda</h2>
      <div class="content-wrapper" v-for="(item, index) in info" :key="index">
        <ScheduleTable :data="item"/>
      </div>
    </div>
  </section>
</template>
<script>
  import { scheduleInfo } from '@/data/index';
  import ScheduleTable from './HomeScheduleTable.vue';

  export default {
    name: 'Scheduler',
    components: { ScheduleTable },
    created() {
      this.info = scheduleInfo;
    },
    data() {
      return {
        info: [],
        speakers: [],
      };
    },
    filter: {
      formatDate( value ) {
        const format = 'dd/mm';
        const currentFormat = 'DD/MM/YYYY';
        return this.$moment( value, currentFormat ).format( format );
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .schedule
    margin 20px 0
    .title
      text-align center


</style>
