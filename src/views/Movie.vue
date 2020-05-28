<template>
  <v-card color="transparent" class="d-flex align-center movieCard">
    <v-img
      v-if="this.movie.poster_url"
      class="moviePoster hidden-sm-and-down"
      :src="this.movie.poster_url"
    ></v-img>
    <div class="d-flex flex-column infoContainer">
      <h1 class="movieTitle">{{this.movie.title}}</h1>

      <div class="d-flex flex-column">
        <h2>
          Rating: {{this.movie.rating}}
          <v-icon class="mb-1" color="primary">star</v-icon>
        </h2>
        <h2 class="d-flex genres">
          <span class="addSpace">Genres:</span>
          <p :key="item" v-for="item in this.movie.genres">{{item.name}}|</p>
        </h2>
      </div>
      <p class="movieOverview">{{this.movie.overview}}</p>
      <div class="d-flex" v-if="this.loggedUser.user_id">
        <v-btn
          v-on:click="followMovie"
          width="70%"
          v-if="!this.movie.following"
          class="primary secondary--text"
        >FOLLOW</v-btn>
        <v-btn
          v-on:click="unfollowMovie"
          v-else
          width="70%"
          class="primary secondary--text"
        >FOLLOWING</v-btn>
        <v-btn v-on:click="watchMovie" v-if="!this.movie.watched" class="ml-3 n2wblue" width="20%">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn v-on:click="unwatchMovie" v-else class="ml-3 n2wblue" width="20%">
          <v-icon>mdi-eye-off</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'Movie',
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: mapState({
    movie: state => state.currentMovie,
    loggedUser: state => state.loggedUser,
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
@import '../assets/styles/Movie.css';
</style>
