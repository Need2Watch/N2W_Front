<template>
  <v-list color="transparent" class="imageList" max-height="450">
    <v-row class="pa-6" align="center" justify="center">
      <v-col class="d-flex" cols="6" v-for="(image,index) in images" :key="index">
        <v-img width="50%" :src="image.url" />
      </v-col>
    </v-row>
  </v-list>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'N2wMovieImages',
  data() {
    return {
      images: [
        {
          url:
            'https://www.denofgeek.com/wp-content/uploads/2014/12/lord-of-the-rings-greatest-moments.jpg?fit=1920%2C1080',
        },
        {
          url:
            'https://img2.looper.com/img/gallery/5-best-and-5-worst-scenes-from-the-lord-of-the-rings-trilogy/best-gandalf-takes-on-the-balrog-in-khazad-dm-1554734194.jpg',
        },
        {
          url:
            'https://www.denofgeek.com/wp-content/uploads/2020/02/lotrbattledoom_0.jpg',
        },
        {
          url: 'https://i.ytimg.com/vi/rCZ3SN65kIs/maxresdefault.jpg',
        },
        {
          url:
            'https://www.denofgeek.com/wp-content/uploads/2020/02/lotrbattledoom_0.jpg',
        },
        {
          url: 'https://i.ytimg.com/vi/rCZ3SN65kIs/maxresdefault.jpg',
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
.imageList {
  overflow-y: scroll;
  overflow-x: hidden;
}

.imageList::-webkit-scrollbar {
  width: 5px;
}

.imageList::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fbc500;
}
</style>