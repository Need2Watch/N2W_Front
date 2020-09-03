<template>
  <div id="main-container" align="center" data-testid="carousel">
    <v-btn
      color="transparent"
      depressed
      absolute
      left
      height="50%"
      id="left-btn"
      @click="moveCarousel(-1)"
      :disabled="atHeadOfList"
    >
      <v-icon size="50">mdi-chevron-left</v-icon>
    </v-btn>
    <v-row>
      <v-col id="carousel" class="d-flex">
        <n2w-cinema-card
          class="cinema-card"
          :key="item.title"
          v-for="item in items"
          :style="cardStyle"
          v-bind:id="item.movie_id"
          v-bind:name="item.title"
          v-bind:rating="item.rating"
          v-bind:image="item.poster_url"
          v-bind:overview="item.overview"
        ></n2w-cinema-card>
      </v-col>
    </v-row>
    <v-btn
      color="transparent"
      depressed
      absolute
      right
      height="50%"
      id="right-btn"
      @click="moveCarousel(1)"
      :disabled="atEndOfList"
    >
      <v-icon size="50">mdi-chevron-right</v-icon>
    </v-btn>
  </div>
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
<style scoped>
#main-container {
  position: relative;
}

#left-btn,
#right-btn {
  top: calc(50% - 25%);
  z-index: 500;
}

#carousel {
  overflow: hidden !important;
}

.cinema-card.hover {
  transform: scale(1.2);
  transform-origin: center;
}
</style>