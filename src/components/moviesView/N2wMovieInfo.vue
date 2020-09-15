<template>
  <v-row class="d-flex" cols="12">
    <v-col class="d-flex d-sm-flex d-md-none" sm="3">
      <v-img class="text-center" :src="movie.poster_url" />
    </v-col>
    <v-col md="8" sm="6" cols="12">
      <div class="text-h4" v-text="movie.title"></div>

      <div class="d-flex align-center mt-2">
        <div class="text-subtitle-1 grey--text">2001 - 2 h 58 min - 13+</div>

        <v-chip small class="mx-2 text-subtitle-1" text-color="secondary" color="primary">
          {{movie.rating}}
          <v-icon small right>mdi-star</v-icon>
        </v-chip>
      </div>
    </v-col>
    <v-col class="d-flex justify-md-center justify-end" align-self="end" sm="3" cols="12">
      <n2w-follow-button small v-if="loggedUser.userId" />
      <n2w-watch-button small v-if="loggedUser.userId" class="ml-2" />
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex';

import N2wFollowButton from '../buttons/N2wFollowButton.vue';
import N2wWatchButton from '../buttons/N2wWatchButton.vue';

export default {
  name: 'N2wMovieInfo',
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
  },

  components: {
    N2wFollowButton,
    N2wWatchButton,
  },
};
</script>
