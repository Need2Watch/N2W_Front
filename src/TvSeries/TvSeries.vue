<template>
  <div>
    <media-content-card />
    <v-container fluid class="mt-4 secondary">
      <season-selector :seasons="serie.length" @clickedSeason="onClickSeasonList" />
    </v-container>
    <episode
      v-for="(episode, index) in serie[selectedSeason-1]"
      :key="episode"
      :title="episode.title"
      :season="selectedSeason"
      :description="episode.description"
      :episode="index+1"
      :image="episode.image"
    />
  </div>
</template>
<script>
import Episode from './Episode.vue';
import MediaContentCard from '../shared/MediaContentCard/MediaContentCard.vue';
import SeasonSelector from './SeasonSelector.vue';

export default {
  name: 'TvSeries',
  components: {
    Episode,
    MediaContentCard,
    SeasonSelector,
  },
  data() {
    return {
      selectedSeason: 1,
      serie: [
        [
          {
            title: 'Rose',
            seen: true,
            description: 'Heeeey',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/irTDkbtPQ4aM9YQw1uEevzk5rSz.jpg',
          },
          {
            title: 'The End of the world',
            seen: true,
            description: 'Esta es la descripcion de un episodio',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/hg7IMOwTe5zV89CjcoOv0tJFZe6.jpg',
          },
          {
            title: 'The Unquiet Dead',
            seen: true,
            description: 'Esta es una descripcion to rechulona',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/l3oSyFTBXYVSRMNXBEC2u40Jw60.jpg',
          },
          {
            title: 'The Long Game',
            seen: false,
            description: 'Y otra descripcion',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/cCmY8qKoI88FMuZaQ8GzYMQxDWt.jpg',
          },
        ],
        [
          {
            title: 'Blue',
            seen: true,
            description: 'Esta es la descripcion de un episodio',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/l3oSyFTBXYVSRMNXBEC2u40Jw60.jpg',
          },
          {
            title: 'The End of the world',
            seen: true,
            description: 'Esta es la descripcion de otro episodio mas',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/hg7IMOwTe5zV89CjcoOv0tJFZe6.jpg',
          },
          {
            title: 'The Unquiet Dead',
            seen: true,
            description: 'DESCRIPCION',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/l3oSyFTBXYVSRMNXBEC2u40Jw60.jpg',
          },
          { title: 'Aliens on London', seen: true, description: 'Hiiii' },
          {
            title: 'World War Three',
            seen: false,
            description: 'Holi :3',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/l3oSyFTBXYVSRMNXBEC2u40Jw60.jpg',
          },
          {
            title: 'Dalek',
            seen: false,
            description: 'Esto es un string',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/l3oSyFTBXYVSRMNXBEC2u40Jw60.jpg',
          },
          {
            title: 'The Long Game',
            seen: false,
            description:
              'Esto es una descripcion muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy larga.',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/cCmY8qKoI88FMuZaQ8GzYMQxDWt.jpg',
          },
        ],
        [
          { title: 'Green', seen: true, description: 'Heeeey' },
          {
            title: 'The End of the world',
            seen: true,
            description: 'Aqui',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/cCmY8qKoI88FMuZaQ8GzYMQxDWt.jpg',
          },
        ],
        [
          { title: 'Red', seen: true, description: 'El' },
          {
            title: 'The End of the world',
            seen: true,
            description: 'rich',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/hg7IMOwTe5zV89CjcoOv0tJFZe6.jpg',
          },
          { title: 'The Unquiet Dead', seen: true, description: 'en' },
          {
            title: 'The Long Game',
            seen: false,
            description: 'Minecraft',
            image:
              'https://image.tmdb.org/t/p/w227_and_h127_bestv2/cCmY8qKoI88FMuZaQ8GzYMQxDWt.jpg',
          },
        ],
      ],
    };
  },
  methods: {
    onClickSeasonList(season) {
      this.selectedSeason = season;
    },
  },
};
</script>
