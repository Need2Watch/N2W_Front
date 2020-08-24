<template>
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="1">
      <v-icon size="60" @click="moveCarousel(-1)" :disabled="atHeadOfList">mdi-chevron-left</v-icon>
    </v-col>
    <v-col cols="10">
      <v-row align="center" class="overflow-hidden">
        <div class="d-flex" :style="cardStyle">
          <div class="my-5 mx-10" :key="item.title" v-for="item in items">
            <n2w-cinema-card
              v-bind:id="item.movie_id"
              v-bind:name="item.title"
              v-bind:rating="item.rating"
              v-bind:image="item.poster_url"
              v-bind:overview="item.overview"
            ></n2w-cinema-card>
          </div>
        </div>
      </v-row>
    </v-col>
    <v-col class="text-center" cols="1">
      <v-icon size="60" @click="moveCarousel(1)" :disabled="atEndOfList">mdi-chevron-right</v-icon>
    </v-col>
  </v-row>
</template>
<script>
import N2wCinemaCard from './N2wCinemaCard.vue';
export default {
  name: 'N2wCarousel',
  components: {
    N2wCinemaCard,
  },
  template: '#v-carousel',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 5,
      paginationFactor: 262,
    };
  },
  computed: {
    cardStyle() {
      return {
        transform: 'translateX(' + this.currentOffset + 'px)',
        transition: 'transform 150ms ease-out',
      };
    },
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  },
};
</script>