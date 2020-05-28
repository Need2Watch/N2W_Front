<template>
  <v-card height="100%" color="transparent" class="d-flex flex-column justify-center align-center">
    <p class="comingSoonText">COMING SOON!</p>
    <div class="d-flex">
      <v-img
        class="mr-2"
        max-width="500px"
        max-height="400px"
        src="https://i.imgur.com/6L3VwLR.png"
      ></v-img>
      <v-img
        class="ml-2"
        max-width="400px"
        max-height="300px"
        src="https://i.imgur.com/Ale1OO5.png"
      ></v-img>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'TvSeries',
};
</script>
<style scoped>
@import '../assets/styles/TvSeries.css';
</style>