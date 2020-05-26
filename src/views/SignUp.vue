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
        'https://img1.looper.com/img/gallery/does-joker-have-a-post-credits-scene/intro-1568039547.jpg',
        'https://www.tasteofcinema.com/wp-content/uploads/2018/08/leonardo_dicaprio_django.jpg',
        'https://www.mlive.com/resizer/iO9-FHTVQ--Ucjz5tl3yG1MxksM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/citpat/entertainment_impact/photo/web-600full-the-shawshank-redemption-screenshotjpg-5a956a60c1e90fe3.jpg',
        'https://cdn3.upsocl.com/wp-content/uploads/2018/01/jw1.jpg',
        'https://imgix.bustle.com/rehost/2016/9/13/2157977f-222c-42f3-9f88-f60dcbdc47c2.jpg',
      ],
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/SignUp.css';
</style>
