<template>
  <v-container class="secondary" fill-height>
    <v-row class="fill-height">
      <v-col>
        <p class="text-h5 text-center">Seasons</p>
        <v-list color="transparent">
          <v-list-item
            v-for="season in Number(this.seasons)"
            :key="season"
            @click="updateSelectedSeason"
          >
            <v-list-item-content>Season {{ season }}</v-list-item-content>
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
  data() {},
  methods: {
    updateSelectedSeason() {
      console.log('holitaa');
    },
  },
};
</script>
<style scoped></style>
