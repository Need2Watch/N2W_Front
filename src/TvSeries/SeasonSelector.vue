<template>
  <v-row data-testid="seasons-list" justify="space-around">
    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
          Season {{selectedSeason}}
          <v-icon class="ml-4">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list color="secondary">
        <v-list-item
          v-for="(season, i) in this.seasons"
          :key="i"
          @click="updateSelectedSeason(season)"
        >
          <v-list-item-title>Season {{ season }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
export default {
  name: 'SeasonSelector',
  props: {
    seasons: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selectedSeason: 1,
    };
  },
  methods: {
    updateSelectedSeason(season) {
      this.selectedSeason = season;
      this.$emit('clickedSeason', season);
    },
  },
};
</script>