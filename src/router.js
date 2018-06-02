import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Index.vue';
import About from './views/Speakers/Index.vue';

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: About,
    },
    {
      path: '/tickets',
      beforeEnter() {
        window.location.href = 'https://openexpoeurope.com/oe2018/register/';
      },
    },
  ],
} );
