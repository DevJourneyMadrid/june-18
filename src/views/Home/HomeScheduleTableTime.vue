<template>
  <th scope="row">
    <p class="m-0 lead">
      <span>{{ el.time.start.hour }}</span>
      <small class="text-muted">:{{ el.time.start.min }}</small>
    </p>
    <p class="lead hide"> - </p>
    <p class="m-0 lead">
      <span>{{ el.time.end.hour }}</span>
      <small class="text-muted">:{{ el.time.end.min }}</small>
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
<style lang="stylus" scoped>
  p.lead
    font-family monospace
    font-size 20px
    span
      font-weight 900
  .hide
    display none
  @media (max-width: 500px)
    p.lead
      display inline
    th
      background-color #dfe2e7

</style>
