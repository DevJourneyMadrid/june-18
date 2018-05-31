import Vue from 'vue';
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use( VueMomentJS, moment );

Vue.config.productionTip = false;

new Vue( {
  router,
  store,
  render: h => h( App ),
} ).$mount( '#app' );
