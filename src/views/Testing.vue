<template>
  <v-card height="100%" width="100%" class="d-inline-block mx-auto">
    <v-col cols="10">
      <v-card :color="movie.color" dark>
        <div class="d-flex">
          <div style="width: 30%">
            <v-img height="425" :src="movie.src">
              <v-row align="start">
                <v-col cols="2">
                  <v-icon v-for="n in parseInt(movie.rating/2)" :key="n" color="primary">mdi-star</v-icon>

                  <v-icon v-if="ratingHasDecimal" color="primary">mdi-star-half</v-icon>
                </v-col>
              </v-row>
            </v-img>
          </div>
          <div>
            <v-card-title class="headline" v-text="movie.title"></v-card-title>

            <v-card-subtitle v-text="movie.artist"></v-card-subtitle>
            <v-card-text>Movie description</v-card-text>
            <v-card-actions>
              <v-btn v-on:click="followMovie">FOLLOW</v-btn>
              <v-btn v-on:click="unfollowMovie">FOLLOWING</v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-col>
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
    return {
      movie: {
        color: '#1F7087',
        src:
          'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
        title: 'After',
        rating: '8.5',
        artist: 'Drama, Misterio',
      },
    };
  },
  computed: mapState({
    movie: state => state.currentMovie,
    loggedUser: state => state.loggedUser,
    starCount: function() {
      let starCountArray = this.movie.rating.split(',');
      return starCountArray;
    },
    ratingHasDecimal: function() {
      if (this.movie.rating % 1 != 0) return true;
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
@import '../assets/styles/Movie.css';
</style>
