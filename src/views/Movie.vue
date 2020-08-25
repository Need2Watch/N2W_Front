<template>
  <v-card color="secondary" class="pt-10" height="100%">
    <n2w-movie-card></n2w-movie-card>
  </v-card>
</template>
<script lang="ts">
import { mapState } from 'vuex';
import axios from 'axios';
import N2wMovieCard from '../components/moviesView/N2wMovieCard.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    N2wMovieCard,
  },
  computed: {
    ...mapState({
      starCount: function () {
        let starCountArray = this.movie.rating.split(',');
        return starCountArray;
      },
      ratingIsOdd: function () {
        if (this.movie.rating % 2 != 0) return true;
        return false;
      },
    }),
  },
})
export default class Movie extends Vue {
  followMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/follow', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.getters.currentMovie.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('followMovie');
      });
  }
  watchMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/watch', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.state.movie.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('watchMovie');
      });
  }
  unfollowMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/unfollow', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.state.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('followMovie');
      });
  }
  unwatchMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/unwatch', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.state.movie.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('watchMovie');
      });
  }
}
</script>