<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col md="6" cols="12" class="d-flex flex-column align-center">
        <p class="text-h3">GET IN TOUCH!</p>
        <n2w-contact-us-form />
      </v-col>
      <v-col md="6" cols="12" class="d-flex flex-column">
        <v-btn height="100%" class="text-sm-h2 text-h4" text>
          <v-icon size="100%" class="mr-sm-8 mr-4" left>mdi-facebook</v-icon>Need2Watch
        </v-btn>
        <v-btn height="100%" text class="text-sm-h2 text-h4">
          <v-icon size="100%" class="mr-sm-8 mr-4" left>mdi-twitter</v-icon>Need2Watch
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import N2wContactUsForm from './N2wContactUsForm.vue';
export default {
  name: 'ContactUs',
  components: {
    N2wContactUsForm,
  },
};
</script>
<style scoped>
.container {
  background-image: url(https://i.imgur.com/pmyWD6B.jpg);
  background-color: rgba(27, 38, 54, 0.5);
  background-blend-mode: color-burn;
  background-position: center;
  background-size: cover;
}
</style>
