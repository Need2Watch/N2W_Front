<template>
  <v-card color="transparent" class="d-flex movieCard" height="100%" width="100%">
    <v-card class="white moviePoster" height="100%" width="50%">
      <v-img width="100%" :src="this.movie.poster_url"></v-img>
    </v-card>
    <div style="height: 100%; width: 75%" class="d-flex flex-column">
      <div class="pl-5 movieMainInfo d-flex">
        <v-card-title class="movieTitle">{{this.movie.title}}</v-card-title>
        <div class="d-flex flex-column">
          <h2>
            Rating: {{this.movie.rating}}
            <v-icon class="mb-1" color="primary">star</v-icon>
          </h2>
          <h2>Genre: {{this.movie.genres}}</h2>
        </div>
      </div>
      <v-card-text>
        <p class="pl-5 movieOverview">{{this.movie.title}}</p>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';

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
      /*
      movieTitle: '1917',
      moviePosterUrl:
        'https://i1.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/08/1917-poster.jpg',
      movieRating: '9,6',
      movieGenre: 'War, Drama',
      movieOverview:
        'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
        */
    };
  },
  computed: mapState({
    movie: state => state.movie,
  }),
};
</script>
<style scoped>
@import '../assets/styles/Movie.css';
</style>
