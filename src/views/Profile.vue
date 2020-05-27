<template>
  <v-card height="100%" color="transparent" class="d-flex profileCard">
    <div class="d-flex flex-column align-center">
      <v-avatar size="300" class="nav-bar-avatar">
        <v-img :src="this.loggedUser.profilePicture"></v-img>
      </v-avatar>
      <div class="d-flex flex-column align-center profileInfo">
        <h1>{{this.loggedUser.firstName}} {{this.loggedUser.lastName}}</h1>
        <h2>{{this.loggedUser.username}}</h2>
        <h2>{{this.loggedUser.email}}</h2>
        <h2>{{this.loggedUser.city}}, {{this.loggedUser.country}}</h2>
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
import { mapState } from 'vuex';
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
      userBio: 'This is the user biography',
    };
  },
  computed: mapState({
    loggedUser: state => state.loggedUser,
  }),
};
</script>
<style scoped>
@import '../assets/styles/Profile.css';
</style>
