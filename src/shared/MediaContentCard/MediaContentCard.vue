<template>
  <v-container class="secondary" data-testid="card" fluid fill-height>
    <v-row>
      <v-spacer />
      <v-col class="hidden-sm-and-down" md="4">
        <v-img class="text-center" :src="movie.poster_url" />
      </v-col>
      <v-spacer />
      <v-col md="7" sm="12">
        <info v-if="tab == 0" />
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

import Overview from './Overview';
import Reviews from './Reviews';
import Cast from './Cast';
import Media from './Media';
import Info from './Info';

export default {
  name: 'Card',
  components: {
    Overview,
    Reviews,
    Cast,
    Media,
    Info,
  },
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
        { tab: 'Overview', component: 'Overview' },
        { tab: 'Media', component: 'Media' },
        { tab: 'Reviews', component: 'Reviews' },
        { tab: 'Cast', component: 'Cast' },
      ];
    },
    movieGenres() {
      let currentMovie = this.$store.getters['currentMovie/currentMovie'];
      let movieGenres = currentMovie.genres;
      let genresNames = movieGenres.map((genre) => genre.name);
      return genresNames.join(', ');
    },
  },
};
</script>
