<template>
  <div class="d-flex flex-column align-center">
    <h1 class="mt-6">Se han encontrado {{this.movieList.length}} resultados</h1>
    <v-container>
      <v-row no-gutters justify="center">
        <v-col class="ma-2" v-for="item in this.movieList" :key="item.movie_id" cols="12" sm="2">
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
import N2wCinemaCard from '../components/moviesView/N2wCinemaCard.vue';
export default {
  name: 'Search',
  components: {
    N2wCinemaCard,
  },

  computed: {
    loggedUser() {
      return this.$store.getters['loggedUser/loggedUser'];
    },
    movieList() {
      return this.$store.getters['movies/movies'];
    },
  },
};
</script>