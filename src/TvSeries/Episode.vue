<template>
  <v-card class="secondary ma-4" data-testid="episode-info">
    <v-row no-gutters align="center">
      <v-col cols="3">
        <v-img height="100%" :src="this.image"></v-img>
      </v-col>
      <v-col cols="9">
        <v-card-title>{{this.title}}</v-card-title>
        <v-card-subtitle>Season {{this.season}}, Episode {{this.episode}}</v-card-subtitle>
        <v-card-text>{{this.description}}</v-card-text>
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
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
</style>