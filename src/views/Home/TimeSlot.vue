<template>
  <th scope="row" class="text-center">
    <p class="m-0 lead">
      <span>{{ el.time.start.hour }}</span>
      <small>:{{ el.time.start.min }}</small>
    </p>
    <p class="m-0 lead">
      <span>{{ el.time.end.hour }}</span>
      <small>:{{ el.time.end.min }}</small>
    </p>
  </th>
</template>
<script>
  export default {
    name: 'timeSlot',
    props: {
      el: {
        required: true,
        type: Object,
      },
    },
    computed: {
      start() {
        return '<b></b>:';
      },
    },
  };
</script>
<style lang="stylus">
  p.lead
    font-family monospace
    font-size 20px
    span
      font-weight 900

</style>
