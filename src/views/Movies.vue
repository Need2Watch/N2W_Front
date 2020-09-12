<template>
  <div>
    <v-card-title>Following Movies</v-card-title>
    <n2w-carousel
      v-if="this.loggedUser.userId && this.followingMovies"
      v-bind:items="this.followingMovies"
    ></n2w-carousel>

    <v-card-title>Popular Movies</v-card-title>
    <n2w-carousel v-bind:items="this.popularMovies"></n2w-carousel>

    <v-card-title>TOP Rated Movies</v-card-title>
    <n2w-carousel v-bind:items="this.topRatedMovies"></n2w-carousel>
  </div>
</template>
<script>
import N2wCarousel from '../components/moviesView/N2wCarousel.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({ loggedUser: 'loggedUser/loggedUser' }),
  },
  methods: {
    getMoviesOf(movieKind) {
      let route = 'http://127.0.0.1:5000/movies/' + movieKind;
      if (this.loggedUser.userId) {
        route += '/' + this.loggedUser.userId;
      }
      return axios
        .get(route)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted: function () {
    let self = this;
    if (this.loggedUser.userId)
      this.getMoviesOf('following').then(
        (data) => (self.followingMovies = data),
      );
    this.getMoviesOf('popular').then((data) => (self.popularMovies = data));
    this.getMoviesOf('top').then((data) => (self.topRatedMovies = data));
  },
};
</script>
