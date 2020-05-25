<template>
  <div class="d-flex align-center signUpBody">
    <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div :style="{ backgroundImage: `url(${slide})`}" class="slide"></div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <n2w-sign-up-form></n2w-sign-up-form>
  </div>
</template>

<script>
import N2wSignUpForm from '../components/N2wSignUpForm';
export default {
  name: 'SignUp',
  components: {
    N2wSignUpForm,
  },
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg',
        'https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        'https://www.istockphoto.com/resources/images/PhotoFTLP/Essential-images-we-love-1055891344.jpg',
        'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      ],
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/SignUp.css';
</style>
