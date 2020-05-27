<template>
  <div class="d-flex flex-column align-center">
    <h1 class="pt-12 pb-6">Se han encontrado {{this.movies.length}} resultados</h1>
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
            v-bind:id="item.movie_id"
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
  methods: {},
};
</script>
<style scoped>
@import '../assets/styles/Search.css';
</style>