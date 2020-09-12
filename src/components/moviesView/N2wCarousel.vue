<template>
  <div id="main-container" data-testid="carousel">
    <v-btn
      color="rgb(0,0,0,0.4)"
      depressed
      absolute
      tile
      height="50%"
      id="left-btn"
      @click="moveCarousel(-1)"
      :disabled="atHeadOfList"
    >
      <v-icon size="50">mdi-chevron-left</v-icon>
    </v-btn>
    <v-row align="center" id="carousel-container" no-gutters :style="sectionStyle">
      <v-col class="d-flex">
        <n2w-cinema-card
          v-for="item in items"
          :key="item.title"
          class="cinema-card"
          v-bind:id="item.movie_id"
          v-bind:name="item.title"
          v-bind:rating="item.rating"
          v-bind:image="item.poster_url"
          v-bind:overview="item.overview"
        ></n2w-cinema-card>
      </v-col>
    </v-row>
    <v-btn
      color="rgb(0,0,0,0.4)"
      depressed
      absolute
      tile
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
      currentCarouselSection: 0,
      currentOffset: 0,
      paginationFactor: 0,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    sectionStyle() {
      return {
        transform: 'translateX(' + this.currentOffset + 'px)',
        transition: 'transform 300ms ease-out',
        position: 'relative',
      };
    },
    atEndOfList() {
      return (
        this.currentCarouselSection === Math.ceil(this.items.length / 4) - 1
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      this.paginationFactor = document.getElementById(
        'carousel-container',
      ).offsetWidth;
      if (direction === 1) {
        this.currentOffset -= this.paginationFactor;
        this.currentCarouselSection++;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
        this.currentCarouselSection--;
      }
    },
    handleResize() {
      let carouselWidth = document.getElementById('carousel-container')
        .offsetWidth;
      this.paginationFactor = carouselWidth;
      this.currentOffset = -this.currentCarouselSection * this.paginationFactor;
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
  top: 25%;
  z-index: 500;
}

#right-btn {
  right: 0;
}

.cinema-card {
  min-width: 25%;
  height: auto;
  transition: 0.3s ease all;
}

.cinema-card:hover {
  transform: scale(1.1);
  transform-origin: center;
  z-index: 520;
}
</style>