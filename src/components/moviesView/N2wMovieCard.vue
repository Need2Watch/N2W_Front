<template>
  <v-container class="secondary" data-testid="card" fluid fill-height>
    <v-row>
      <v-spacer />
      <v-col md="4">
        <v-img class="text-center" :src="movie.poster_url" />
      </v-col>
      <v-spacer />
      <v-col md="7">
        <v-row v-if="tab == 0" class="d-flex" cols="12">
          <v-col md="8" cols="12">
            <div class="text-h4" v-text="this.movie.title"></div>

            <div class="d-flex align-center mt-2">
              <div class="text-subtitle-1 grey--text">2001 - 2 h 58 min - 13+</div>

              <v-chip small class="mx-2 text-subtitle-1" text-color="secondary" color="primary">
                {{this.movie.rating}}
                <v-icon small right>mdi-star</v-icon>
              </v-chip>
            </div>
          </v-col>
          <v-col
            class="d-flex align-self-start justify-md-center justify-end"
            align-self="center"
            md="4"
            cols="12"
          >
            <n2w-follow-button small v-if="this.loggedUser.userId" />
            <n2w-watch-button small v-if="this.loggedUser.userId" class="ml-4" />
          </v-col>
        </v-row>
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

import N2wFollowButton from '../buttons/N2wFollowButton.vue';
import N2wWatchButton from '../buttons/N2wWatchButton.vue';
import N2wMovieOverview from './N2wMovieOverview';
import N2wMovieReviews from './N2wMovieReviews';
import N2wMovieCast from './N2wMovieCast';
import N2wMovieMedia from './N2wMovieMedia';

export default {
  name: 'N2wMovieCard',
  data() {
    return {
      tab: null,
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
    starCount() {
      let starCountArray = parseInt(this.movie.rating / 2);
      return starCountArray;
    },
    movie() {
      return this.$store.getters['currentMovie/currentMovie'];
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
    N2wMovieOverview,
    N2wMovieReviews,
    N2wMovieCast,
    N2wMovieMedia,
  },
};
</script>
