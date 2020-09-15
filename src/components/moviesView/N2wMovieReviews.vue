<template>
  <v-container>
    <v-list max-height="540" class="reviewsList" color="transparent" three-line>
      <div v-for="(item, index) in items" :key="index">
        <v-list-item :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h5 font-weight-black">
              A review by {{item.username}}
              <v-chip class="mx-2" color="n2wgray">
                {{item.rating}}
                <v-icon small right>mdi-star</v-icon>
              </v-chip>
            </v-list-item-title>
            <v-list-item-subtitle>Written by {{item.username}} on {{item.date}}</v-list-item-subtitle>
            <v-list-item-content v-text="item.review" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </div>
    </v-list>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'N2wMovieReviews',
  data() {
    return {
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          username: 'NeoBrowser',
          review:
            'Brooking no argument, history should quickly regard Peter Jackson’s The Fellowship Of The Ring as the first instalment of the best fantasy epic in motion picture history. This statement is worthy of investigation for several reasons.',
          date: 'July 20, 2013',
          rating: '10.0',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          username: 'gdeveloper',
          review:
            'An epic movie if I ever saw one. Captivating and just plain fun to watch. This movie is, indeed, art.',
          date: 'November 20, 2019',
          rating: '10.0',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          username: 'Wuchak',
          review:
            'This three-hour fantasy features a diverse cast of colorful characters, quaint beings and settings, moments of genuine wonder, dark evil creatures, high adventure, thrilling brutal action, a superb score, magnificent locations (forests, mountains, rivers, etc.), and wondrous CGI sets. The film LOOKS and SOUNDS so great that it’d be sinful to give it a lower rating.',
          date: 'March 20, 2018',
          rating: '7.0',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          username: 'LadyGreenEyes',
          review:
            'Overall, I give this four stars. Not five, because some of the changes really bug me, as a long-time Tolkien fan, but a solid four.The casting, to start, was brilliant. Sean Astin was the absolute perfect choice for Sam, and did a remarkable job bringing that character to life for us. He really WAS Sam, in this role, in a very deep way. I always liked his acting, but here, he showed how talented he actually is. Just amazing. Elijah Wood gives a great performance of Frodo, and those expressive eyes of his really add a lot of depth to the emotions the',
          date: 'December 16, 2018',
          rating: '8.0',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          username: 'reneedown',
          review:
            'The film LOOKS and SOUNDS so great that it’d be sinful to give it a lower rating. Brooking no argument, history should quickly regard Peter Jackson’s The Fellowship Of The Ring as the first instalment of the best fantasy epic in motion picture history. This statement is worthy of investigation for several reasons.',
          date: 'August 20, 2020',
          rating: '10.0',
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
.reviewsList {
  overflow-y: scroll;
  overflow-x: hidden;
}

.reviewsList::-webkit-scrollbar {
  width: 5px;
}

.reviewsList::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fbc500;
}
</style>