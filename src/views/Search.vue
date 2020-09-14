<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="mt-6 text-center">Se han encontrado {{this.movieList.length}} resultados</h1>
      </v-col>
      <v-col
        v-for="item in this.movieList"
        :key="item.movie_id"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        xl="1"
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
</template>

<script>
import N2wCinemaCard from '../components/moviesView/N2wCinemaCard.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Search',
  components: {
    N2wCinemaCard,
  },

  computed: {
    ...mapGetters({
      movieList: 'movies/movies',
      loggedUser: 'loggedUser/loggedUser',
    }),
  },
};
</script>