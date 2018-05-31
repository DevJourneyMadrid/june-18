import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/Speakers.vue';

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
  ],
} );
