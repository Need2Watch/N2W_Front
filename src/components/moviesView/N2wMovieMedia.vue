<template>
  <v-container>
    <v-list color="transparent" class="imageList" max-height="525">
      <v-row class="mx-2" align="center" justify="center">
        <v-col class="d-flex" cols="6" v-for="(image,index) in images" :key="index">
          <v-img :src="image.url" />
        </v-col>
      </v-row>
    </v-list>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'N2wMovieMedia',
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
            'https://image.tmdb.org/t/p/original/skVTWsoQvFGLUnOo1Wv3coAsARw.jpg',
        },
        {
          url:
            'https://image.tmdb.org/t/p/original/29t27rSQel2Ao8I7OwUkUF66RVB.jpg',
        },
        {
          url:
            'https://image.tmdb.org/t/p/original/ua5EHfleb44L5hfHPs2BPqRAove.jpg',
        },
        {
          url:
            'https://image.tmdb.org/t/p/original/dUVbWINfRMGojGZRcO6GF1Z2nV8.jpg',
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