<template>
  <div>
    <v-container class="resultText">Se han encontrado {{this.movies.length}} resultados</v-container>
    <v-container>
      <v-row no-gutters>
        <v-col
          class="card-wrapper"
          v-on:click="goMovie(item.movie_id)"
          v-for="item in this.movies"
          :key="item.title"
          cols="12"
          sm="2"
        >
          <n2w-cinema-card
            v-bind:name="item.title"
            v-bind:rating="item.rating"
            v-bind:image="item.poster_url"
          ></n2w-cinema-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import N2wCinemaCard from '../components/N2wCinemaCard.vue';
export default {
  name: 'Search',
  components: {
    N2wCinemaCard,
  },
  data() {
    return {};
  },
  computed: mapState({
    user: state => state.loggedUser,
    movies: state => state.movies,
  }),
  methods: {
    goMovie(movie_id) {
      const previousThis = this;
      axios
        .get(
          'http://127.0.0.1:5000/movies/' +
            movie_id +
            '/' +
            previousThis.$store.state.loggedUser.user_id,
        )
        .then(function(response) {
          let movie = response.data;
          console.log(response.data);
          previousThis.$store.commit('loadMovie', movie);
          previousThis.$router.push('/movie');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/Search.css';
</style>