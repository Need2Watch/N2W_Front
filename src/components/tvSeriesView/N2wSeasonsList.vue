<template>
  <v-container class="secondary" fill-height>
    <v-row class="fill-height">
      <v-col>
        <p class="text-h5 text-center">Seasons</p>
        <v-list color="transparent">
          <v-list-item
            v-for="season in this.seasons"
            :key="season"
            @click="updateSelectedSeason(season)"
          >
            <v-list-item-content class="d-flex justify-center">Season {{ season }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'N2wSeasonsList',
  props: {
    seasons: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateSelectedSeason(season) {
      this.$emit('clickedSeason', season);
    },
  },
};
</script>
<style scoped></style>
