import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-100433425-3',
  router
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
