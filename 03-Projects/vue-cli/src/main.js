import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Create a new project Terminal
// $ vue init webpack-simple vue-cli
// Run Dev
// $ npm run dev

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})

// Whilst it also might work fine in bigger projects, there's also an alternative you might want to consider.
//
// Instead of having your components in a components/ folder (and storing other shared files in other folders - e.g. shared/), you can also group your files by feature.
//
// This could look like this:
//
// - main.js
// - users/
// - - account/
// - - analytics/
// - shop
// - - main/
// - - checkout/
