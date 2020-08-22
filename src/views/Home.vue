<template>
  <div class="root fill-height">
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col class="d-flex flex-column align-center" sm="10" md="8">
          <v-img max-width="70%" src="../assets/img/logo-extended.png"></v-img>
          <p
            class="d-flex flex-column align-center title font-weight-black n2wwhite--text"
          >Control your movie night schedule</p>
        </v-col>
        <v-col align-self="center" class="d-flex flex-column align-center" sm="12" md="6">
          <p>Join Need2Watch now. Your favourite platform for managing your TV Series and films. In N2W you'll receive our best recomendations based on your taste. Start managing your series scheduling their episodes, follow your friends and discover new content. Everything is easier with Need2Watch, we'll make your life easier so...come on and join us! It's free!</p>
          <v-btn
            color="primary"
            class="n2wblue--text font-weight-black"
            href="https://github.com/Need2Watch"
            target="_blank"
          >JOIN NEED2WATCH FOR FREE</v-btn>
        </v-col>
        <v-col align-self="center" cols="6">
          <v-card>
            <v-carousel
              class="hidden-sm-and-down"
              cycle
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :style="{ backgroundImage: `url(${slide})`}"
                class="slide"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer app color="primary" class="n2wblue--text">
      <v-spacer></v-spacer>
      <div>Copyright &copy; {{ new Date().getFullYear() }} Need2Watch, inc. All rights reserved.</div>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {
      slides: [
        'https://wallpaperset.com/w/full/3/c/b/42022.jpg',
        'https://sfwallpaper.com/images/film-hd-wallpaper-4.jpg',
        'https://wallpaperplay.com/walls/full/7/3/a/162157.jpg',
        'https://wallpaperaccess.com/full/267457.jpg',
        'https://i.pinimg.com/originals/7d/c2/c8/7dc2c88c47f8a97d3a739c4c3c367b24.jpg',
      ],
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/Home.css';
</style>
