<template>
  <v-card color="transparent" class="d-flex profileCard" height="100%" width="100%">
    <div class="d-flex flex-column align-center">
      <v-avatar size="400" class="nav-bar-avatar">
        <v-img :src="userAvatarURL"></v-img>
      </v-avatar>
      <h1>{{userFirstName}} {{userLastName}}</h1>
      <h2>{{userName}}</h2>
      <h2>{{userEmail}}</h2>
      <h2>{{userCity}} {{userCountry}}</h2>
    </div>
    <div style="height: 100%; width: 70%" class="d-flex flex-column">
      <v-card-title class="userBioHeader">Biography</v-card-title>
      <v-card-text>
        <p class="userBio">{{userBio}}</p>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'Profile',
  props: {
    /*
      userFirstName: String,
      userLastName: String,
      userName: String,
      userEmail: String,
      userCountry: String,
      userCity: String,
      userBio: String,
      userAvatarURL: String,
    */
  },
  components: {},
  data() {
    return {
      userFirstName: 'Francis',
      userLastName: 'Molina',
      userName: 'rexuswolf',
      userEmail: 'francisjmp99@gmail.com',
      userCountry: 'España',
      userCity: 'Córdoba',
      userBio: 'This is the user biography',
      userAvatarURL:
        'https://es.gravatar.com/userimage/148655767/f61f068eaac5470225f8923c99de0778.jpg?size=400',
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/Profile.css';
</style>
