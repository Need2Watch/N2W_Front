<template>
  <div>
    <vs-divider
      v-if="this.user.user_id && this.followingMovies"
      position="left-center"
      color="n2wwhite"
      class="text-h3 font-weight-bold"
    >Following</vs-divider>
    <n2w-carousel
      v-if="this.user.user_id && this.followingMovies"
      v-bind:items="this.followingMovies"
    ></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="text-h3 font-weight-bold">Popular</vs-divider>
    <n2w-carousel v-bind:items="this.popularMovies"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="text-h3 font-weight-bold">Top rated</vs-divider>
    <n2w-carousel v-bind:items="this.topRatedMovies"></n2w-carousel>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import N2wCarousel from '../components/moviesView/N2wCarousel.vue';
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
    user: (state) => state.loggedUser,
  }),
  methods: {
    getMoviesOf(movieKind) {
      let route = 'http://127.0.0.1:5000/movies/' + movieKind;
      if (this.user.user_id) {
        route += '/' + this.user.user_id;
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
    if (this.user.user_id)
      this.getMoviesOf('following').then(
        (data) => (self.followingMovies = data),
      );
    this.getMoviesOf('popular').then((data) => (self.popularMovies = data));
    this.getMoviesOf('top').then((data) => (self.topRatedMovies = data));
  },
};
</script>
