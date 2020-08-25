<template>
  <v-text-field
    class="mt-5 mr-3"
    v-model="movieName"
    @submit.prevent="submitSearch"
    placeholder="Search movie..."
    append-icon="mdi-magnify"
    v-on:keyup.enter="submitSearch"
  ></v-text-field>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class N2wSearchBar extends Vue {
  movieName: string = '';

  get loggedUser() {
    return this.$store.state.loggedUser;
  }

  submitSearch() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/search', {
        title: this.movieName,
        user_id: this.loggedUser.userId,
      })
      .then(function (response) {
        let movies = response.data;
        previousThis.$store.dispatch('movies/loadMovies', movies);
        previousThis.$router.push('/search');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>