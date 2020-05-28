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

<script>
import axios from 'axios';

export default {
  name: 'N2wSearchBar',
  data: () => ({
    movieName: '',
  }),

  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },

  methods: {
    submitSearch() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/search', {
          title: this.movieName,
          user_id: this.loggedUser.user_id,
        })
        .then(function(response) {
          let movies = response.data;
          previousThis.$store.commit('loadMovies', movies);
          previousThis.$router.push('/search');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch('http://127.0.0.1/movies/search')
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>