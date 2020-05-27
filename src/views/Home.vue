<template>
  <div class="moviesDiv">
    <vs-divider
      v-if="this.loggedUser.user_id"
      position="left-center"
      color="n2wwhite"
      class="sectionDivider"
    >Following</vs-divider>
    <n2w-carousel v-if="this.loggedUser.user_id" v-bind:items="this.followingMovies"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Popular</vs-divider>
    <n2w-carousel v-bind:items="this.popularMovies"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Top rated</vs-divider>
    <n2w-carousel v-bind:items="this.topRatedMovies"></n2w-carousel>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import N2wCarousel from '../components/N2wCarousel.vue';
import axios from 'axios';

export default {
  name: 'Movie',
  props: {},
  components: {
    N2wCarousel,
  },
  data() {
    return {
      followingMovies: [],
      popularMovies: [],
      topRatedMovies: [],
    };
  },
  computed: mapState({
    loggedUser: state => state.loggedUser,
  }),
  methods: {
    async getMoviesOf(movieKind) {
      let route = 'http://127.0.0.1:5000/movies/' + movieKind;
      if (this.loggedUser.user_id) {
        route += '/' + this.loggedUser.user_id;
      }
      return axios
        .get(route)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted: function() {
    let self = this;
    this.getMoviesOf('following').then(data => (self.followingMovies = data));
    console.debug(this.followingMovies);
    this.getMoviesOf('popular').then(data => (self.popularMovies = data));
    console.debug(this.popularMovies);
    this.getMoviesOf('top').then(data => (self.topRatedMovies = data));
  },
};
</script>
<style scoped>
@import '../assets/styles/Home.css';
</style>
