<template>
  <div class="moviesDiv">
    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Following</vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">For you</vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Popular</vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Top rated</vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import N2wCarousel from '../components/N2wCarousel.vue';

export default {
  name: 'Movie',
  props: {},
  components: {
    N2wCarousel,
  },
  data() {
    return {
      fromBack: this.state.movies,
    };
  },
  computed: mapState({
    movies: state => state.movies,
  }),
};
</script>
<style scoped>
@import '../assets/styles/Home.css';
</style>
