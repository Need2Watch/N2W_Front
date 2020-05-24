<template>
  <v-card class="card-cinema-card">
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
  props: {
    name:{
      type: String,
      required: true
    },
    rating:{
      type: Number,
      required: true
    },
    image:{
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
@import '../assets/styles/N2wCinemaCard.css';
</style>