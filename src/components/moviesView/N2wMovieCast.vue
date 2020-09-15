<template>
  <v-container>
    <v-list color="transparent" class="castList" max-height="525">
      <v-row class="mx-2">
        <v-col cols="3" v-for="(member, index) in cast" :key="index">
          <v-card color="n2wgray" class="castCard" :href="member.page" target="_blank" hover>
            <v-img :src="member.image" />
            <v-card-title class="text-body-2" v-text="member.name"></v-card-title>
            <v-card-subtitle v-text="member.character"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-list>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'N2wMovieCast',
  data() {
    return {
      cast: [
        {
          name: 'Elijah Wood',
          character: 'Frodo',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7UKRbJBNG7mxBl2QQc5XsAh6F8B.jpg',
          page:
            'https://www.themoviedb.org/person/109-elijah-wood?language=el-GR',
        },
        {
          name: 'Sean Astin',
          character: 'Sam',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ywH1VvdwqlcnuwUVr0pV0HUZJQA.jpg',
          page:
            'https://www.themoviedb.org/person/1328-sean-astin?language=el-GR',
        },
        {
          name: 'Sean Bean',
          character: 'Boromir',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kTjiABk3TJ3yI0Cto5RsvyT6V3o.jpg',
          page: 'https://www.themoviedb.org/person/48-sean-bean?language=el-GR',
        },
        {
          name: 'Cate Blanchett',
          character: 'Galadriel',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9V83uemR0ra9Wd9iRXTMlfAQlTB.jpg',
          page:
            'https://www.themoviedb.org/person/112-cate-blanchett?language=el-GR',
        },
        {
          name: 'Viggo Mortensen',
          character: 'Aragorn',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dVWm9ON1k40jSIEwqSl4p8V8Q5g.jpg',
          page:
            'https://www.themoviedb.org/person/110-viggo-mortensen?language=el-GR',
        },
        {
          name: 'Ian Mckellen',
          character: 'Gandalf',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg',
          page:
            'https://www.themoviedb.org/person/1327-ian-mckellen?language=el-GR',
        },
        {
          name: 'Billy Boyd',
          character: 'Pippin',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jluumxuDr7rm2f97NFf9LydBdaZ.jpg',
          page:
            'https://www.themoviedb.org/person/1329-billy-boyd?language=el-GR',
        },
        {
          name: 'Orlando Bloom',
          character: 'Legolas',
          image:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kboHD4zumfJt3vkjORd8ETJyJfX.jpg',
          page:
            'https://www.themoviedb.org/person/114-orlando-bloom?language=el-GR',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      movie: 'currentMovie/currentMovie',
    }),
    movieGenres() {
      let currentMovie = this.$store.getters['currentMovie/currentMovie'];
      let movieGenres = currentMovie.genres;
      let genresNames = movieGenres.map((genre) => genre.name);
      return genresNames.join(', ');
    },
  },
};
</script>
<style scoped>
.castList {
  overflow-y: scroll;
  overflow-x: hidden;
}

.castList::-webkit-scrollbar {
  width: 5px;
}

.castList::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fbc500;
}

.castCard:hover {
  transition: transform 0.3s;
  transform: scale(1.1);
}
</style>
