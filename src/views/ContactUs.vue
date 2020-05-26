<template>
  <div class="contactUsMainDiv" >

    <div class="formDiv">
      <N2wContactUsForm></N2wContactusForm>
    </div>
    
    <div class="socialDiv">
      <v-list-item class="socialNetwork">
        <v-avatar size="100">
          <v-img src="../assets/img/facebook.png"></v-img>
        </v-avatar>

        <v-list-item-title class="socialNetworkText">NEED2WATCH</v-list-item-title>
      </v-list-item>
      
      <v-list-item class="socialNetwork">
        <v-avatar size="100">
          <v-img src="../assets/img/twitter.png"></v-img>
        </v-avatar>

        <v-list-item-title class="socialNetworkText">@NEED2WATCH</v-list-item-title>
      </v-list-item>
    </div>

  </div>
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
@import '../assets/styles/ContactUs.css';
</style>
