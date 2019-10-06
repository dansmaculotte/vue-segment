import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Segment from '../../src/index.js'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

Vue.use(Router)

Vue.use(Segment, {
  writeKey: SEGMENT_WRITE_KEY,
  disabled: true,
  router
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

