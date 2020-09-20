<template>
  <v-container class="pa-0" fill-height fluid>
    <v-row class="fill-height">
      <v-col md="6" class="pa-0 hidden-sm-and-down">
        <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :style="{ backgroundImage: `url(${slide})`}"
            class="slide"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col md="6" cols="12" class="pa-0">
        <n2w-sign-in-form></n2w-sign-in-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import N2wSignInForm from './N2wSignInForm';

export default {
  name: 'SignIn',
  components: {
    N2wSignInForm,
  },
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