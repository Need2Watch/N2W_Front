<template>
  <v-btn v-on:click="watchMovie" v-if="!this.movie.watched" color="n2wblue">
    <v-icon>mdi-eye</v-icon>
  </v-btn>
  <v-btn v-on:click="unwatchMovie" v-else color="n2wblue">
    <v-icon>mdi-eye-off</v-icon>
  </v-btn>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'N2wWatchButton',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser/loggedUser',
      movie: 'currentMovie/currentMovie',
    }),
  },
  methods: {
    watchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/watch', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.dispatch('currentMovie/watchMovie');
        });
    },
    unwatchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unwatch', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.dispatch('currentMovie/watchMovie');
        });
    },
  },
};
</script>