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
      <v-col class="carousel d-flex">
        <n2w-cinema-card
          v-for="item in items"
          :key="item.title"
          :style="cardStyle"
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
      currentOffset: 0,
      cardsSeen: 0,
      paginationFactor: 0,
      minWidthOfNewCard: 250,
    };
  },
  mounted() {
    this.paginationFactor = document.getElementById(
      'carousel-container',
    ).offsetWidth;
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
    numberOfCards() {
      return Math.ceil(this.paginationFactor / this.minWidthOfNewCard);
    },
    cardStyle() {
      return 'min-width: ' + 100 / this.numberOfCards + '%';
    },
    atEndOfList() {
      return (
        this.currentOffset <=
        -Math.ceil(this.items.length / this.numberOfCards) *
          this.paginationFactor +
          this.paginationFactor
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
        this.cardsSeen += this.numberOfCards;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
        this.cardsSeen -= this.numberOfCards;
      }
    },
    handleResize() {
      let newSection = 0;
      this.paginationFactor = document.getElementById(
        'carousel-container',
      ).offsetWidth;
      newSection = Math.floor(this.cardsSeen / this.numberOfCards);
      this.currentOffset = newSection * -this.paginationFactor;
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
  height: auto;
  transition: 0.3s ease all;
}

.cinema-card:hover {
  transform: scale(1.05);
  transform-origin: center;
  z-index: 520;
}
</style>