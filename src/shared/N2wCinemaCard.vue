<template>
  <v-card data-testid="card" tile class="card-cinema-card" @click="goToMovie">
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
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'N2wCinemaCard',
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
    ...mapGetters({
      loggedUser: 'loggedUser/loggedUser',
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
      if (this.loggedUser.userId) {
        route += '/' + this.loggedUser.userId;
      }
      console.debug(route);
      const previousThis = this;
      axios
        .get(route)
        .then(function (response) {
          let movie = response.data;
          previousThis.$store.dispatch('currentMovie/loadMovie', movie);
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
.card-cinema-card {
  transform-origin: center;
}

.card-cinema-card:hover {
  transition: 0.3s ease all;
  transform: scale(1.05);
  z-index: 2;
}
.card-cinema-card:hover .card-img {
  transition: opacity 0.3s;
  opacity: 0.3;
}

.card-footer {
  width: 100%;
  opacity: 0;
  position: absolute;
  bottom: 0;
}

.card-cinema-card:hover .card-footer {
  opacity: 1;
}

.card-footer-text {
  word-break: keep-all;
}
</style>