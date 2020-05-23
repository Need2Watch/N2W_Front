<template>
  <v-card class="card-cinema-card" style="border-radius: 0;">
      <v-img class="card-img" v-bind:src="this.image"/>

      <div class="card-footer">
        <v-card-title class="card-footer-text">
          <p class="card-name">{{this.name}}</p>
        </v-card-title>

        <v-card-subtitle>
          <p class="card-rating-star">★ </p>
          <p class="card-rating-text">{{this.rating}}</p>
        </v-card-subtitle>
      </div>
  </v-card>
</template>
<script>
export default {
  name: 'N2wCinemaCard',
  template: "#v-card",
  data() {
    return {
        name: "Doctor Who",
        rating: 10,
        image: "https://placehold.it/182x269",
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wCinemaCard.css';
</style>