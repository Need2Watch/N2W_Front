<template>
  <v-container class="secondary" data-testid="card" fluid fill-height>
    <v-row>
      <v-col cols="5">
        <v-img :src="movie.poster_url" />
      </v-col>
      <v-col cols="7">
        <v-col class="d-flex align-center" cols="12">
          <v-col cols="10">
            <div class="text-h4" v-text="this.movie.title"></div>
            <div class="text-subtitle-1 grey--text mt-2">2018 - 2 h 23 min - 16+</div>
          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <div class="text-h4" v-text="this.movie.rating" />
            <v-icon size="35" color="primary">mdi-star</v-icon>
          </v-col>
        </v-col>
        <v-tabs background-color="transparent" fixed-tabs v-model="tab">
          <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items class="transparent" v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card class="transparent" flat>
              <component :is="item.component" />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-row class="ma-4" justify="end" v-if="this.loggedUser.userId">
          <n2w-follow-button />
          <n2w-watch-button class="ml-4" />
        </v-row>
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
import N2wMovieDetails from './N2wMovieDetails';
import N2wMovieImages from './N2wMovieImages';

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
        { tab: 'Images & More', component: 'N2wMovieImages' },
        { tab: 'Reviews', component: 'N2wMovieReviews' },
        { tab: 'Details', component: 'N2wMovieDetails' },
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
    N2wMovieDetails,
    N2wMovieImages,
  },
};
</script>
