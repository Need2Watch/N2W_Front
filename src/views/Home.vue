<template>
  <div class="moviesDiv">
    <vs-divider
      v-if="this.user.user_id && this.followingMovies"
      position="left-center"
      color="n2wwhite"
      class="sectionDivider"
    >Following</vs-divider>
    <n2w-carousel
      v-if="this.user.user_id && this.followingMovies"
      v-bind:items="this.followingMovies"
    ></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Popular</vs-divider>
    <n2w-carousel v-bind:items="this.popularMovies"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">Top rated</vs-divider>
    <n2w-carousel v-bind:items="this.topRatedMovies"></n2w-carousel>
  </div>
</template>
<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
@import '../assets/styles/Home.css';
</style>
