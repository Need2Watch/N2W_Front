<template>
  <v-card class="card-cinema-card">
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
export default {
  name: 'N2wCinemaCard',
  template: '#v-card',
  props: {
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
    filmPoster() {
      var filmPoster = null;

      if (this.image.localeCompare('') == 0) {
        console.log(this.image.localeCompare(''));
        filmPoster = 'https://i.imgur.com/LltB3Qs.png';
      } else {
        filmPoster = this.image;
      }

      return filmPoster;
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wCinemaCard.css';
</style>