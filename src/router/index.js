import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import Servises from '@/components/Servises'
import Contacts from '@/components/Contacts'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: '',
      component: About
    },
    {
      path: '/servises',
      name: '',
      component: Servises
    },
    {
      path: '/contacts',
      name: '',
      component: Contacts
    }
  ]
})
