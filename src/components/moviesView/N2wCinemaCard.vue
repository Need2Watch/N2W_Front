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
      if (this.user.user_id) {
        route += '/' + this.user.user_id;
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
  width: 182px;
  height: 273px;
}

.card-cinema-card:hover {
  box-shadow: 0 0 15px 0 black, 0 0 2px 0 rgba(40, 44, 53, 0.06);
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