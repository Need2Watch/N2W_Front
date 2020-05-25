<template>
  <v-card color="transparent" class="d-flex" height="100%" width="100%">
    <v-img height="100%" width="42%" :src="moviePosterUrl"></v-img>
    <div style="height: 100%; width: 70%" class="d-flex flex-column">
      <div class="movieMainInfo d-flex">
        <v-card-title class="movieTitle">{{movieTitle}}</v-card-title>
        <div class="d-flex flex-column">
          <h2>Rating: {{movieRating}}</h2>
          <h2>Genre: {{movieGenre}}</h2>
        </div>
      </div>
      <v-card-text>
        <p class="movieOverview">{{movieOverview}}</p>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'Movie',
  props: {
    /*
    movieTitle: String,
    moviePosterUrl_: String,
    movieRating_: String,
    movieGenre_: String,
    movieOverview_: String,
    */
  },
  components: {},
  data() {
    return {
      movieTitle: '1917',
      moviePosterUrl:
        'https://i1.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/08/1917-poster.jpg',
      movieRating: '9,6',
      movieGenre: 'War, Drama',
      movieOverview:
        'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/Movie.css';
</style>
