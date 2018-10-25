import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Create a new project Terminal
// $ vue init webpack-simple vue-cli
// Run Dev
// $ npm run dev

Vue.component('app-server-status', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
