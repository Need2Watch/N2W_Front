<template>
  <v-card class="card-cinema-card" @click="goToMovie">
    <v-img class="card-img" v-bind:src="this.filmPoster" />

    <div class="card-footer">
      <v-card-title class="card-footer-text">
        <p class="card-name">{{this.name}}</p>
      </v-card-title>

      <v-card-subtitle>
        <v-icon color="primary">star</v-icon>
        <p class="card-rating-text ml-1">{{this.rating}}</p>
      </v-card-subtitle>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'N2wCinemaCard',
  template: '#v-card',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      user: state => state.loggedUser,
    }),
    filmPoster() {
      if (this.image) {
        return this.image;
      }
      return 'https://i.imgur.com/Iw32fZR.png';
    },
  },
  methods: {
    goToMovie() {
      let route = 'http://127.0.0.1:5000/movies/' + this.id;
      if (this.user.user_id) {
        route += '/' + this.user.user_id;
      }
      console.debug(route);
      const previousThis = this;
      axios
        .get(route)
        .then(function(response) {
          let movie = response.data;
          previousThis.$store.commit('loadMovie', movie);
          previousThis.$router.push('/movie');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wCinemaCard.css';
</style>