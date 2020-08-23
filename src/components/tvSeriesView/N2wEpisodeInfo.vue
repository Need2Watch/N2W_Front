<template>
  <div>
    <p class="font-weight-bold">{{this.title}}</p>
    <p>Season {{this.season}}, Episode {{this.episode}}</p>
    <p>{{this.description}}</p>
  </div>
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
  data: () => ({}),
  methods: {},
};
</script>
<style scoped>
</style>