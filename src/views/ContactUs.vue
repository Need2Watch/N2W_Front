<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col md="6" class="d-flex flex-column align-center">
        <p class="text-h3">GET IN TOUCH!</p>
        <n2w-contact-us-form />
      </v-col>
      <v-col md="6" class="d-flex flex-column">
        <v-btn height="100" class="text-h2" text>
          <v-icon size="80" class="mr-8" left>mdi-facebook</v-icon>Need2Watch
        </v-btn>
        <v-btn height="100" text class="text-h2">
          <v-icon size="80" class="mr-8" left>mdi-twitter</v-icon>Need2Watch
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import N2wContactUsForm from '../components/N2wContactUsForm.vue';
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
