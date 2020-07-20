<template>
  <v-card v-bind="$attrs" outlined width="80%" class="mx-auto">
    <div class="d-flex">
      <div style="width: 30%" class="hidden-sm-and-down">
        <v-img height="425" :src="movie.poster_url">
          <v-row align="start">
            <v-col cols="1" class="ml-2">
              <v-icon v-for="n in starCount" :key="n" color="primary">mdi-star</v-icon>
              <v-icon v-if="ratingIsOdd" color="primary">mdi-star-half</v-icon>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <div>
        <v-card-title class="headline" v-text="this.movie.title"></v-card-title>

        <v-card-subtitle>
          <span :key="item" v-for="item in this.movie.genres">{{item.name}}|</span>
        </v-card-subtitle>
        <v-card-text class="headline mb-10">{{this.movie.overview}}</v-card-text>
        <v-card-actions v-if="this.loggedUser.user_id" class="movieCardActions">
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
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'N2wMovieCard',
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: mapState({
    movie: state => state.currentMovie,
    loggedUser: state => state.loggedUser,
    starCount: function() {
      let starCountArray = parseInt(this.movie.rating / 2);
      return starCountArray;
    },
    ratingIsOdd: function() {
      if (this.movie.rating % 2 != 0) return true;
      return false;
    },
  }),
  methods: {
    followMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/follow', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('followMovie');
        });
    },
    watchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/watch', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('watchMovie');
        });
    },
    unfollowMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unfollow', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('followMovie');
        });
    },
    unwatchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unwatch', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('watchMovie');
        });
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wMovieCard.css';
</style>
