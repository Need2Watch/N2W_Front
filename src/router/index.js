import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  },
  {
    path: '/signUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
  },
  {
    path: '/signIn',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SignIn.vue'),
  },
  {
    path: '/contactUsSuccess',
    name: 'ContactUsSuccess',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ContactUsSuccess.vue'),
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ContactUs.vue'),
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Movies.vue'),
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Movie.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditProfile.vue'),
  },
  {
    path: '/tvSeries',
    name: 'TvSeries',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TvSeries.vue'),
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Testing.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
