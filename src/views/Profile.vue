<template>
  <v-card height="100%" color="transparent" class="d-flex profileCard">
    <div class="d-flex flex-column align-center">
      <v-avatar size="300" class="nav-bar-avatar">
        <v-img :src="userAvatarURL"></v-img>
      </v-avatar>
      <div class="d-flex flex-column align-center profileInfo">
        <h1>{{userFirstName}} {{userLastName}}</h1>
        <h2>{{userName}}</h2>
        <h2>{{userEmail}}</h2>
        <h2>{{userCity}} {{userCountry}}</h2>
      </div>
    </div>
    <div class="d-flex flex-column profileInfo">
      <v-card-actions>
        <v-btn
          to="/editProfile"
          rounded
          color="primary"
          class="secondary--text editProfileButton"
          fixed
          bottom
          right
        >Edit Profile</v-btn>
      </v-card-actions>
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
