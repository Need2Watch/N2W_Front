<template>
  <v-card class="card-cinema-card">
    <v-img class="card-img" v-bind:src="this.filmPoster" />

    <div class="card-footer">
      <v-card-title class="card-footer-text">
        <p class="card-name">{{this.shortName}}</p>
      </v-card-title>

      <v-card-subtitle>
        <p class="card-rating-star">★&#x20;</p>
        <p class="card-rating-text">{{this.rating}}</p>
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

      if (this.image.localeCompare("") == 0) {
        console.log(this.image.localeCompare(""));
        filmPoster = "https://i.imgur.com/LltB3Qs.png";
      }
      else {
        filmPoster = this.image;
      }

      return filmPoster;
    },
    shortName() {
      var shortName = null;

      if (this.name.length > 16) {
        shortName = this.name.substring(0, 30);
        shortName = shortName + '...';
      } else {
        shortName = this.name;
      }

      return shortName;
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wCinemaCard.css';
</style>