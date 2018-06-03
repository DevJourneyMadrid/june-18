<template>
  <section class="about">
    <div class="container">
      <div class="bg shadow">
        <div class="grid-block">
          <div class="item-1">
            <div class="group">
              <h4>DevJourneyMadrid#18 👇</h4>
              <p>
                El sábado 9 de Junio, en <a href="https://www.campus.co/madrid/es?ref=DevJourneyMad" target="_blank">Campus
                Madrid</a> celebramos el <strong>Dev Journey Madrid #2018</strong>. Un evento para ir cerrando la
                temporada de charlas, meetups, conferencias, ... con un buen sabor de boca.
              </p>
            </div>
            <div class="group">
              <h4 class="mt-4">Pero.. ¿Quién viene? 🤔</h4>
              <p>
                En esta edición contamos con 3 grandísimos ponentes. Van a estar con nosotros ponentes de talla
                internacional, nada más y nada menos que 😎:
              </p>
              <ul>
                <li><a href="https://twitter.com/esStackOverflow">Juan Garza</a>, hablando de StackOverflow</li>
                <li><a href="https://www.linkedin.com/in/isamauny/">Isabelle Mauny</a>, hablando de APIs</li>
                <li><a href="https://twitter.com/garcianavalon">Enrique García Navalón</a>, hablando de Cloud Firestore
                </li>
              </ul>
            </div>
            <div class="group">
              <h5 class="mt-4">¿Que tienes que madrugar?</h5>
              <p>
                No te preocupes. Nosotros nos encargamos del desayuno. Y cuando termine el evento tendremos tiempo para
                hacer networking mientras nos tomamos unas cervezas o refrescos.
              </p>
              <p>
                ¿Todavía tienes dudas? No te lo pienses más. Tú solo saca tu <a
                href="https://devjourneymadrid18.eventbrite.es">entrada</a> y ven con ganas de pasártelo bien.
                Del resto nos encargamos nosotros.
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
