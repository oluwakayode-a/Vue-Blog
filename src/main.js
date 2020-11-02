import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueRouter from 'vue-router';
import Routes from './routes'
import moment from 'moment'


Vue.config.productionTip = false
Vue.use(VueRouter)


Vue.filter('formatDate', value => {
  if (value) {
    return moment(String(value)).format("Do MMMM YYYY")
  }
})

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
