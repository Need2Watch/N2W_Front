<template>
  <div class="card-carousel-wrapper n2wgray">
    <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="card-carousel n2wgray">
      <div class="card-carousel--overflow-container">
        <div
          class="card-carousel-cards"
          :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }"
        >
          <div class="card-wrapper" :key="item.title" v-for="item in items">
            <n2w-cinema-card
              v-bind:name="item.title"
              v-bind:rating="item.rating"
              v-bind:image="item.poster_url"
            ></n2w-cinema-card>
          </div>
        </div>
      </div>
    </div>
    <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
  </div>
</template>
<script>
import N2wCinemaCard from '../components/N2wCinemaCard.vue';
export default {
  created() {
    this.windowResize();
    window.addEventListener('resize', this.resizeEventHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeEventHandler);
  },
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
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    resizeEventHandler() {
      this.windowResize();
    },
    windowResize() {
      var preSize = this.windowSize;

      if (window.matchMedia('(max-width: 554px)').matches) {
        this.windowSize = 1;
        return 0;
      }
      if (window.matchMedia('(max-width: 816px)').matches) {
        this.windowSize = 2;
        return 0;
      }
      if (window.matchMedia('(max-width: 1078px)').matches) {
        this.windowSize = 3;
        return 0;
      }
      if (window.matchMedia('(max-width: 1340px)').matches) {
        this.windowSize = 4;
        return 0;
      }
      this.windowSize = 5;

      if (preSize < this.windowSize) {
        for (var i = 0; i < this.windowSize - preSize; i++) {
          this.moveCarousel(-1);
        }
      }
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wCarousel.css';
</style>