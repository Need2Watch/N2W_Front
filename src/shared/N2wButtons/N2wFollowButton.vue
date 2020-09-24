<template>
  <v-btn
    v-bind="$attrs"
    v-on:click="followMovie"
    v-if="!this.movie.following"
    class="primary secondary--text"
    >FOLLOW</v-btn
  >
  <v-btn
    v-bind="$attrs"
    v-on:click="unfollowMovie"
    v-else
    class="primary secondary--text"
    >FOLLOWING</v-btn
  >
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'N2wFollowButton',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser/loggedUser',
      movie: 'currentMovie/currentMovie',
    }),
  },
  methods: {
    followMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/follow', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.dispatch('currentMovie/followMovie');
        });
    },
    unfollowMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unfollow', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.dispatch('currentMovie/followMovie');
        });
    },
  },
};
</script>
