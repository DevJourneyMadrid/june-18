import Vue from 'vue';
import Router from 'vue-router';
import { eventInfo } from '@/data/index';
import Home from './views/Home/Index.vue';
import About from './views/About/Index.vue';
import Speakers from './views/Speakers/Index.vue';

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
      component: Speakers,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/tickets',
      beforeEnter() {
        window.location.href = eventInfo.ticketsURL;
      },
    },
  ],
} );
