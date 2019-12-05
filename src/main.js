import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './routes'
import {store} from './store/store'
import {db} from './firebasedb'
import { firestorePlugin } from 'vuefire'

Vue.use(VueRouter);
Vue.use(firestorePlugin)
Vue.config.productionTip = false

let app = '';

db.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      store,
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }
});