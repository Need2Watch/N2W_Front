<template>
  <v-container>
    <div v-text="this.movie.overview"></div>
    <v-row class="d-flex">
      <v-col cols="2" class="primary--text text-subtitle">Starring</v-col>
      <v-col cols="10">Jim Carrey, Kate Winslet, Mark Ruffalo</v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col cols="2" class="primary--text text-subtitle">Directed by</v-col>
      <v-col cols="10">Michel Gondry</v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col cols="2" class="primary--text text-subtitle">Genres</v-col>
      <v-col cols="10" v-text="this.movieGenres"></v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'N2wMovieDetails',
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
