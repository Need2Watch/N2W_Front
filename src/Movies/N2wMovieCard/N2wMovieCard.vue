<template>
  <v-container class="secondary" data-testid="card" fluid fill-height>
    <v-row>
      <v-spacer />
      <v-col class="hidden-sm-and-down" md="4">
        <v-img class="text-center" :src="movie.poster_url" />
      </v-col>
      <v-spacer />
      <v-col md="7" sm="12">
        <n2w-movie-info v-if="tab == 0" />
        <v-tabs class="tabs" background-color="transparent" fixed-tabs v-model="tab">
          <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items class="transparent" v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card class="transparent" flat>
              <component :is="item.component" />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

import N2wMovieOverview from './N2wMovieOverview';
import N2wMovieReviews from './N2wMovieReviews';
import N2wMovieCast from './N2wMovieCast';
import N2wMovieMedia from './N2wMovieMedia';
import N2wMovieInfo from './N2wMovieInfo';

export default {
  name: 'N2wMovieCard',
  data() {
    return {
      tab: 0,
    };
  },
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser/loggedUser',
      movie: 'currentMovie/currentMovie',
    }),
    items() {
      return [
        { tab: 'Overview', component: 'N2wMovieOverview' },
        { tab: 'Media', component: 'N2wMovieMedia' },
        { tab: 'Reviews', component: 'N2wMovieReviews' },
        { tab: 'Cast', component: 'N2wMovieCast' },
      ];
    },
    movieGenres() {
      let currentMovie = this.$store.getters['currentMovie/currentMovie'];
      let movieGenres = currentMovie.genres;
      let genresNames = movieGenres.map((genre) => genre.name);
      return genresNames.join(', ');
    },
  },

  components: {
    N2wMovieOverview,
    N2wMovieReviews,
    N2wMovieCast,
    N2wMovieMedia,
    N2wMovieInfo,
  },
};
</script>
