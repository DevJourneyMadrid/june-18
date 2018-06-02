<template>
  <div class="track-table">
    <h4>{{ data.date }}</h4> <!--Formatear fecha-->
    <div class="tracks" v-for="(track, index) in data.tracks" :key="index">
      <table class="table table-bordered">
        <col width="78px"/>
        <thead>
        <tr>
          <th scope="col">Hora</th>
          <th scope="col" class="text-uppercase">{{ track.displayName }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(el, idx) in track.items" :key="idx">
          <TimeSlot :el="el"/>
          <ContentSlot :el="el"/>
        </tr>
        </tbody>
      </table>
      <br>
    </div>
  </div>
</template>
<script>
  import TimeSlot from './TimeSlot.vue';
  import ContentSlot from './ContentSlot.vue';

  export default {
    name: 'TableTrack',
    components: { ContentSlot, TimeSlot },
    props: {
      data: {
        required: true,
        type: Object,
      },
    },
    filters: {
      upperCase( value ) {
        return value.toUpperCase();
      },
    },
  };
</script>
<style lang="stylus">
  .track-table
    margin-top 40px


</style>
