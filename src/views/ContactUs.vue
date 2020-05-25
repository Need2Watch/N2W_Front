<template>
  <div class="contactUsMainDiv">

    <div class="formDiv" style="width: 40%; float:left;">
      <N2wContactUsForm></N2wContactusForm>
    </div>
    
    <div class="socialDiv" style="float:left; margin-top: 100px;">
      <v-list-item style="margin:50px;">
        <v-avatar size="100">
          <v-img src="../assets/img/facebook.png"></v-img>
        </v-avatar>

        <v-list-item-title  style="margin-left:10px; font-family: 'Bungee', cursive; font-size: xx-large;">NEED2WATCH</v-list-item-title>
      </v-list-item>
      
      <v-list-item style="margin:50px;">
        <v-avatar size="100">
          <v-img src="../assets/img/twitter.png"></v-img>
        </v-avatar>

        <v-list-item-title style="margin-left:10px; font-family: 'Bungee', cursive; font-size: xx-large;">@NEED2WATCH</v-list-item-title>
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