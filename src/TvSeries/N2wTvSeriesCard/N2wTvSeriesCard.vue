<template>
  <v-card data-testid="card" color="secondary" v-bind="$attrs" outlined>
    <v-row>
      <v-col md="3" sm="4" cols="12" class="pt-0 pb-0">
        <v-img :src="movie.poster_url">
          <v-row align="start">
            <v-col cols="1" class="ml-4">
              <v-icon v-for="n in starCount" :key="n" color="primary">mdi-star</v-icon>
              <v-icon v-if="ratingIsOdd" color="primary">mdi-star-half</v-icon>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col md="9" sm="8" cols="12">
        <v-card-title class="text-h4" v-text="this.movie.title"></v-card-title>
        <v-card-subtitle v-text="this.movieGenres"></v-card-subtitle>
        <v-card-text class="text-h5">{{this.movie.overview}}</v-card-text>
        <v-card-actions class="justify-end" v-if="this.loggedUser.userId">
          <n2w-follow-button />
          <n2w-watch-button />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex';

import N2wFollowButton from '../../shared/N2wButtons/N2wFollowButton.vue';
import N2wWatchButton from '../../shared/N2wButtons/N2wWatchButton.vue';

export default {
  name: 'N2wTvSeriesCard',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser/loggedUser',
      movie: 'currentMovie/currentMovie',
    }),
    starCount() {
      let starCountArray = parseInt(this.movie.rating / 2);
      return starCountArray;
    },
    ratingIsOdd() {
      if (this.movie.rating % 2 != 0) return true;
      return false;
    },
    movieGenres() {
      let currentMovie = this.$store.getters['currentMovie/currentMovie'];
      let movieGenres = currentMovie.genres;
      let genresNames = movieGenres.map((genre) => genre.name);
      return genresNames.join(', ');
    },
  },

  components: {
    N2wFollowButton,
    N2wWatchButton,
  },
};
</script>
