import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import FontAwesomeIcon from './fontawesome';
import router from './router';
import store from './store';

import 'izitoast/dist/css/iziToast.min.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
