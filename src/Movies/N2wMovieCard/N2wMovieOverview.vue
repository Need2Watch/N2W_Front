<template>
  <v-container>
    <div v-text="this.movie.overview"></div>
    <v-row class="d-flex">
      <v-col md="2" cols="4" class="primary--text text-subtitle">Starring</v-col>
      <v-col md="10" cols="8">Elijah Wood, Sean Astin, Viggo Mortensen</v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col md="2" cols="4" class="primary--text text-subtitle">Directed by</v-col>
      <v-col md="10" cols="8">Peter Jackson</v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col md="2" cols="4" class="primary--text text-subtitle">Genres</v-col>
      <v-col md="10" cols="8" v-text="this.movieGenres"></v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'N2wMovieOverview',
  computed: {
    ...mapGetters({
      movie: 'currentMovie/currentMovie',
    }),
    movieGenres() {
      let currentMovie = this.$store.getters['currentMovie/currentMovie'];
      let movieGenres = currentMovie.genres;
      let genresNames = movieGenres.map((genre) => genre.name);
      return genresNames.join(', ');
    },
  },
};
</script>
