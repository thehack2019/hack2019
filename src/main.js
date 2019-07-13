import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VuePlyr);
Vue.use(ElementUI);


import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(ElementUI, {
  locale
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {},
  methods: {},

}).$mount('#app');
