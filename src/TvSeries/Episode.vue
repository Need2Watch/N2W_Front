<template>
  <v-card class="secondary ma-4" data-testid="episode-info">
    <v-row no-gutters align="center">
      <v-col md="3" sm="4" cols="5">
        <v-img height="100%" :src="this.image"></v-img>
      </v-col>
      <v-col md="8" sm="7" cols="6">
        <v-card-title>{{this.title}}</v-card-title>
        <v-card-subtitle>Season {{this.season}}, Episode {{this.episode}}</v-card-subtitle>
        <v-card-text>{{this.description}}</v-card-text>
      </v-col>
      <v-col cols="1">
        <v-btn v-on:click="watchEpisode" v-if="!this.seen" icon>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn v-on:click="unwatchEpisode" v-if="this.seen" icon>
          <v-icon>mdi-eye-off</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Episode',
  props: {
    title: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    episode: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default:
        'https://image.tmdb.org/t/p/w227_and_h127_bestv2/irTDkbtPQ4aM9YQw1uEevzk5rSz.jpg',
    },
    seen: {
      type: Boolean,
      required: false,
    },
  },
  comptuted: {
    getSeen() {
      return this.seen;
    },
  },
  methods: {
    watchEpisode() {
      this.seen = !this.seen;
      /* Back part isn't ready

      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/tvseries/watch', {
          user_id: previousThis.loggedUser.userId,
          tvSerie_id: previousThis.serie.serie_id,
        })
        .then(function () {
          previousThis.$store.dispatch('currentTvSerie/watchTvSerie');
        });
      */
    },
    unwatchEpisode() {
      this.seen = !this.seen;
      /* Back part isn't ready
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/tvseries/unwatch', {
          user_id: previousThis.loggedUser.userId,
          tvSerie_id: previousThis.serie.serie_id,
        })
        .then(function () {
          previousThis.$store.dispatch('currentTvSerie/watchTvSerie');
        });
      */
    },
  },
};
</script>
<style scoped>
</style>