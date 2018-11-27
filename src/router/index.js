import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import Services from '@/components/Services'
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
      path: '/Services',
      name: '',
      component: Services
    },
    {
      path: '/contacts',
      name: '',
      component: Contacts
    }
  ]
})
