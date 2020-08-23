<template>
  <v-container class="blue" fluid>
    <v-row>
      <v-col cols="12" class="d-flex flex-column align-center">
        <p class="font-weight-black">Seasons</p>
      </v-col>
    </v-row>
    <v-col cols="12" class="d-flex flex-column align-center">
      <v-list color="transparent">
        <v-list-item
          v-for="season in Number(this.seasons)"
          :key="season"
          @click="updateSelectedSeason"
        >
          <v-list-item-content>
            <v-list-item-title>Season {{ season }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
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
