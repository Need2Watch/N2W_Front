<template>
  <v-card hover tile class="card-cinema-card" @click="goToMovie">
    <v-img class="card-img" v-bind:src="this.filmPoster" />

    <v-container class="card-footer pa-0">
      <v-card-title class="card-footer-text justify-center">{{this.name}}</v-card-title>
      <v-card-subtitle>
        <v-row class="mt-2" justify="center">
          <v-icon v-for="n in starCount" :key="n" color="primary">mdi-star</v-icon>
          <v-icon v-if="ratingIsOdd" color="primary">mdi-star-half</v-icon>
          <h2>{{this.rating}}</h2>
        </v-row>
      </v-card-subtitle>
    </v-container>
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
      user: (state) => state.loggedUser,
    }),
    filmPoster() {
      if (this.image) {
        return this.image;
      }
      return 'https://i.imgur.com/Iw32fZR.png';
    },
    starCount: function () {
      let starCountArray = parseInt(this.rating / 2);
      return starCountArray;
    },
    ratingIsOdd: function () {
      if (this.rating % 2 != 0) return true;
      return false;
    },
  },
  methods: {
    goToMovie() {
      let route = 'http://127.0.0.1:5000/movies/' + this.id;
      if (this.user.userId) {
        route += '/' + this.user.userId;
      }
      console.debug(route);
      const previousThis = this;
      axios
        .get(route)
        .then(function (response) {
          let movie = response.data;
          previousThis.$store.commit('loadMovie', movie);
          previousThis.$router.push('/movie');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
@import '../../assets/styles/N2wCinemaCard.css';
</style>