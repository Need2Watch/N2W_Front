<template>
  <v-container class="pa-0" fill-height fluid>
    <v-row>
      <v-col class="pb-0 pt-0" cols="12">
        <n2w-movie-card />
      </v-col>
      <v-col class="pb-0 pt-1 pr-0" md="3" cols="4">
        <n2w-seasons-list :seasons="6" />
      </v-col>
      <v-col class="pb-0 pa-1" md="6" cols="8">
        <n2w-episode-list />
      </v-col>
      <v-col class="pb-0 pt-1 pl-0" md="3" cols="12">
        <n2w-episode-info title="Rose" :season="1" :episode="1" description="HEY" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import N2wEpisodeList from '../components/tvSeriesView/N2wEpisodesList.vue';
import N2wEpisodeInfo from '../components/tvSeriesView/N2wEpisodeInfo.vue';
import N2wSeasonsList from '../components/tvSeriesView/N2wSeasonsList.vue';
import N2wMovieCard from '../components/moviesView/N2wMovieCard.vue';

export default {
  name: 'TvSeries',
  components: {
    N2wEpisodeList,
    N2wEpisodeInfo,
    N2wSeasonsList,
    N2wMovieCard,
  },
};
</script>