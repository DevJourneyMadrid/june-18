<template>
  <section class="about">
    <div class="container">
      <div class="bg shadow">
        <div class="grid-block">
          <div class="item-1">
            <div class="group">
              <h4>¿Qué es Open Source Weekends?</h4>
              <p><a href="https://twitter.com/os_weekends" target="_blank">OSW</a> es una comunidad tecnológica con más
                de 2500 personas que promueve el intercambio de conocimiento y
                la colaboración. Siempre está abierta y es inclusiva con todo tipo de perfiles, tanto por sector como
                por nivel de conocimientos.</p>
            </div>
            <div class="group">
              <p class="mt-4">
                Para esta edición desde la <a href="https://openexpoeurope.com/es/" target="_blank">Open Expo</a>, han
                confiado la representación de las comunidades tecnológicas a Open Source Weekends que se ofrecieron a
                organizar un <b>Open Communities Summit</b> durante el día y medio
                que dura el evento.
              </p>
            </div>

            <div class="group">
              <h4>¿Qué es el Open Communities Summit?</h4>
              <p>
                Un Open Community Summit <em>(OCSummit)</em> es un evento de comunidades donde Open Source Weekends
                invita a las comunidades tecnológicas más destacadas del panorama a exponer lo que hacen durante el
                evento.
              </p>
            </div>
            <div class="d-flex justify-content-end">
              <router-link to="/about" class="btn btn-primary btn-sm btn-outline-primary" role="button">
                Ver más
              </router-link>
            </div>

          </div>
          <div class="item-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'AboutBlock',
  };
</script>

<style lang="stylus" scoped>
  section.about
    background-image: linear-gradient(to bottom right, #02b3e4, #02ccba);
    padding 40px 0
    .bg
      background-color white;
      border-radius 5px
      .grid-block
        display grid
        grid-template-columns 2fr 1fr
        .item-1
          padding 20px
        .item-2
          background: url("../../assets/img/about-bg.jpg") center center no-repeat
          -webkit-background-size: cover
          background-size: cover
          -webkit-border-top-right-radius 5px
          -webkit-border-bottom-right-radius 5px
          -moz-border-radius-topright 5px
          -moz-border-radius-bottomright 5px
          border-top-right-radius 5px
          border-bottom-right-radius 5px
</style>
