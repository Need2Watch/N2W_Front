<template>
  <v-card color="transparent" class="d-flex movieCard" height="100%" width="100%">
    <v-card class="white moviePoster" height="100%" width="50%">
      <v-img width="100%" :src="this.movie.poster_url"></v-img>
    </v-card>
    <div style="height: 100%; width: 75%" class="ml-12 d-flex flex-column">
      <h1 class="movieTitle">{{this.movie.title}}</h1>

      <div class="d-flex flex-column">
        <h2>
          Rating: {{this.movie.rating}}
          <v-icon class="mb-1" color="primary">star</v-icon>
        </h2>
        <h2 class="d-flex">
          Genres:
          <span :key="genre" v-for="genre in this.movie.genres">{{genre.name}}</span>
        </h2>
      </div>
      <p class="movieOverview">{{this.movie.overview}}</p>
      <div class="d-flex">
        <v-btn
          v-on:click="followMovie"
          width="70%"
          v-if="!this.movie.following"
          class="primary secondary--text"
        >FOLLOW</v-btn>
        <v-btn
          v-on:click="unfollowMovie"
          width="70%"
          v-else
          class="primary secondary--text"
        >FOLLOWING</v-btn>
        <v-btn v-on:click="watchMovie" v-if="this.movie.watched" class="ml-3 n2wblue" width="20%">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn
          v-on:click="unwatchMovie"
          v-if="!this.movie.watched"
          class="ml-3 n2wblue"
          width="20%"
        >
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
      console.log(this.loggedUser.user_id);
      axios.post('http://127.0.0.1:5000/movies/follow', {
        user_id: previousThis.loggedUser.user_id,
        movie_id: previousThis.movie.movie_id,
      });
    },
    watchMovie() {
      const previousThis = this;
      axios.post('http://127.0.0.1:5000/movies/watch', {
        user_id: previousThis.loggedUser.user_id,
        movie_id: previousThis.movie.movie_id,
      });
    },
    unfollowMovie() {
      const previousThis = this;
      axios.post('http://127.0.0.1:5000/movies/follow', {
        user_id: previousThis.loggedUser.user_id,
        movie_id: previousThis.movie.movie_id,
      });
    },
    unwatchMovie() {
      const previousThis = this;
      axios.post('http://127.0.0.1:5000/movies/watch', {
        user_id: previousThis.loggedUser.user_id,
        movie_id: previousThis.movie.movie_id,
      });
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/Movie.css';
</style>
