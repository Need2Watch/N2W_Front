<template>
  <div>
    <v-container class="resultText">Se han encontrado {{this.movies.length}} resultados</v-container>
    <v-container>
      <v-row no-gutters>
        <v-col class="card-wrapper" v-for="item in this.movies" :key="item.title" cols="12" sm="2">
          <n2w-cinema-card
            v-bind:name="item.title"
            v-bind:rating="item.rating"
            v-bind:image="item.poster_url"
            @click="goMovie(name, rating, image)"
          ></n2w-cinema-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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
    movies: state => state.movies,
  }),
  methods: {
    goMovie(movieName, rating, image) {
      let movie = { movieName, rating, image };
      this.$store.commit('currentMovie', movie);
      this.$router.push('/movie');
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/Search.css';
</style>