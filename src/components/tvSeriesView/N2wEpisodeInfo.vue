<template>
  <v-container data-testid="episode-info" class="secondary" fill-height>
    <v-row class="fill-height">
      <v-col>
        <v-card-title>{{this.title}}</v-card-title>
        <v-card-subtitle>Season {{this.season}}, Episode {{this.episode}}</v-card-subtitle>
        <v-card-text>{{this.description}}</v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'N2wEpisodeInfo',
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
  },
  methods: {},
};
</script>
<style scoped>
</style>