import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home/Home.vue';
import Search from '../Search/Search.vue';
import SingIn from '../LoginRegister/SignIn.vue';
import SignUp from '../LoginRegister/SignUp.vue';
import ContactUs from '../Contact/ContactUs.vue';
import ContactUsSuccess from '../Contact/ContactUsSuccess.vue';
import Calendar from '../Calendar/Calendar.vue';
import Movies from '../Movies/Movies.vue';
import Movie from '../Movies/Movie.vue';
import Profile from '../Profile/Profile.vue';
import EditProfile from '../Profile/EditProfile.vue';
import TvSeries from '../TvSeries/TvSeries.vue';

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
    component: Search,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp,
  },
  {
    path: '/signIn',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SingIn,
  },
  {
    path: '/contactUsSuccess',
    name: 'ContactUsSuccess',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactUsSuccess,
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactUs,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/tvSeries',
    name: 'TvSeries',
    component: TvSeries,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
