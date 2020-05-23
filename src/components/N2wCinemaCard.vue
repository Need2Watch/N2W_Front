<template>
  <v-card
    class="card-cinema-card"
    max-width="182"
    max-height="269"
  >

      <v-img
        class="card-img"
        v-bind:src="this.image"
      >
      </v-img>

      <v-card-title 
        class="card-footer" 
        max-width="182"
      > 
        <div class="card-footer-text">
          <p class="card-name">{{this.name}}</p>
          <p class="card-rating-star">★ </p>
          <p class="card-rating-text">{{this.rating}}</p>
        </div>
      </v-card-title>
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