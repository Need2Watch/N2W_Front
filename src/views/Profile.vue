<template>
  <v-card height="100%" color="transparent" class="d-flex justify-center align-center">
    <div class="avatarContainer">
      <v-avatar size="300">
        <v-img :src="this.loggedUser.profilePicture"></v-img>
      </v-avatar>
    </div>
    <div class="d-flex flex-column infoContainer">
      <h1>Name: {{this.loggedUser.firstName}} {{this.loggedUser.lastName}}</h1>
      <h2>Username: {{this.loggedUser.username}}</h2>
      <h2>Email: {{this.loggedUser.email}}</h2>
      <h2>City, Country: {{this.loggedUser.city}}, {{this.loggedUser.country}}</h2>
      <h2>Biography</h2>
      <p>{{userBio}}</p>
    </div>
    <div class="d-flex">
      <v-btn
        to="/editProfile"
        rounded
        color="primary"
        class="secondary--text editProfileButton"
        fixed
        bottom
        right
      >Edit Profile</v-btn>
      <v-btn
        rounded
        color="red"
        class="n2wwhite--text logOutButton"
        fixed
        bottom
        right
        @click="logOut"
      >Log Out</v-btn>
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
  methods: {
    logOut() {
      let user = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        user_id: '',
        country: '',
        city: '',
        profilePicture: '',
      };
      this.$store.commit('loadUser', user);
      this.$router.push('/signIn');
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/Profile.css';
</style>
