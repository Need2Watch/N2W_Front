<template>
  <v-card color="secondary" v-bind="$attrs" outlined class="mx-auto">
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
        <v-card-title class="headline" v-text="this.movie.title"></v-card-title>

        <v-card-subtitle>
          <span :key="index" v-for="(item, index) in this.movie.genres">{{item.name}}|</span>
        </v-card-subtitle>
        <v-card-text class="headline mb-10">{{this.movie.overview}}</v-card-text>
        <v-card-actions v-if="this.loggedUser.userId" class="movieCardActions">
          <v-btn
            v-on:click="followMovie"
            v-if="!this.movie.following"
            class="primary secondary--text"
          >FOLLOW</v-btn>
          <v-btn v-on:click="unfollowMovie" v-else class="primary secondary--text">FOLLOWING</v-btn>
          <v-btn v-on:click="watchMovie" v-if="!this.movie.watched" color="n2wblue">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn v-on:click="unwatchMovie" v-else color="n2wblue">
            <v-icon>mdi-eye-off</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import axios from 'axios';

export default {
  name: 'N2wMovieCard',
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    movie() {
      return this.$store.getters['currentMovie/currentMovie'];
    },
    loggedUser() {
      return this.$store.getters['loggedUser/loggedUser'];
    },
    starCount() {
      let starCountArray = parseInt(this.movie.rating / 2);
      return starCountArray;
    },
    ratingIsOdd() {
      if (this.movie.rating % 2 != 0) return true;
      return false;
    },
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
<style scoped>
.movieCardActions {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
