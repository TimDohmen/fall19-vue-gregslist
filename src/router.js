import Vue from 'vue'
import Router from 'vue-router'
import Cars from './views/Cars.vue'
import Homes from './views/Homes.vue'
import Jobs from './views/Jobs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/homes',
      name: 'homes',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Homes.vue')
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Jobs.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/cars/:carId',
      name: 'car',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/Car.vue')
      }
    },
    {
      path: '/home/:homeId',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/Home.vue')
      }
    },
    {
      path: '/jobs/:jobId',
      name: 'job',
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/Job.vue')
      }
    },
    {
      path: '*',
      redirect: '/cars'
    }
  ]
})
