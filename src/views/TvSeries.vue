<template>
  <v-container class="pa-0" fill-height fluid>
    <v-row>
      <v-col class="pb-0 pt-0" cols="12">
        <n2w-tv-series-card />
      </v-col>
      <v-col class="pb-0 pt-1 pr-0" md="3" cols="4">
        <n2w-seasons-list :seasons="serie.length" @clickedSeason="onClickSeasonList" />
      </v-col>
      <v-col class="pb-0 pa-1" md="6" cols="8">
        <n2w-episode-list
          :episodes="serie[this.selectedSeason - 1]"
          @clickedEpisode="onClickEpisodeList"
        />
      </v-col>
      <v-col class="pb-0 pt-1 pl-0" md="3" cols="12">
        <n2w-episode-info
          :title="serie[this.selectedSeason - 1][this.selectedEpisode].title"
          :season="this.selectedSeason"
          :episode="this.selectedEpisode"
          :description="
            serie[this.selectedSeason - 1][this.selectedEpisode].description
          "
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import N2wEpisodeList from '../components/tvSeriesView/N2wEpisodesList.vue';
import N2wEpisodeInfo from '../components/tvSeriesView/N2wEpisodeInfo.vue';
import N2wSeasonsList from '../components/tvSeriesView/N2wSeasonsList.vue';
import N2wTvSeriesCard from '../components/tvSeriesView/N2wTvSeriesCard.vue';

export default {
  name: 'TvSeries',
  data() {
    return {
      selectedSeason: 1,
      selectedEpisode: 0,
      //temporal example
      serie: [
        [
          { title: 'Rose', seen: true, description: 'Heeeey' },
          {
            title: 'The End of the world',
            seen: true,
            description: 'Esta es la descripcion de un episodio',
          },
          {
            title: 'The Unquiet Dead',
            seen: true,
            description: 'Esta es una descripcion to rechulona',
          },
          {
            title: 'The Long Game',
            seen: false,
            description: 'Y otra descripcion',
          },
        ],
        [
          {
            title: 'Blue',
            seen: true,
            description: 'Esta es la descripcion de un episodio',
          },
          {
            title: 'The End of the world',
            seen: true,
            description: 'Esta es la descripcion de otro episodio mas',
          },
          { title: 'The Unquiet Dead', seen: true, description: 'DESCRIPCION' },
          { title: 'Aliens on London', seen: true, description: 'Hiiii' },
          { title: 'World War Three', seen: false, description: 'Holi :3' },
          { title: 'Dalek', seen: false, description: 'Esto es un string' },
          {
            title: 'The Long Game',
            seen: false,
            description:
              'Esto es una descripcion muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy larga.',
          },
        ],
        [
          { title: 'Green', seen: true, description: 'Heeeey' },
          { title: 'The End of the world', seen: true, description: 'Aqui' },
        ],
        [
          { title: 'Red', seen: true, description: 'El' },
          { title: 'The End of the world', seen: true, description: 'rich' },
          { title: 'The Unquiet Dead', seen: true, description: 'en' },
          { title: 'The Long Game', seen: false, description: 'Minecraft' },
        ],
      ],
    };
  },
  methods: {
    onClickSeasonList(season) {
      this.selectedSeason = season;
      this.selectedEpisode = 0;
    },
    onClickEpisodeList(episode) {
      this.selectedEpisode = episode;
    },
  },
  components: {
    N2wSeasonsList,
    N2wEpisodeList,
    N2wEpisodeInfo,
    N2wTvSeriesCard,
  },
};
</script>
