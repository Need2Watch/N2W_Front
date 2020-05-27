<template>
  <v-card height="100%" color="transparent" class="d-flex profileCard">
    <div class="d-flex flex-column align-center">
      <div class="d-flex flex-column align-center profileInfo">
        <form>
          <v-text-field
            type="text"
            :firstName="firstName"
            v-model="firstName"
            label="First Name"
            requiered
          ></v-text-field>
          <v-text-field type="text" v-model="lastName" label="Last Name" requiered></v-text-field>
          <v-text-field type="text" v-model="username" label="Userame" requiered></v-text-field>
          <v-text-field type="text" v-model="city" label="City" requiered></v-text-field>
          <v-text-field type="text" v-model="country" label="Country" requiered></v-text-field>
        </form>
      </div>
    </div>
    <div class="d-flex flex-column profileInfo">
      <v-avatar size="300" class="nav-bar-avatar">
        <v-img :src="this.user.profilePicture"></v-img>
      </v-avatar>
      <v-card-actions>
        <v-btn
          @click="submitForm"
          rounded
          color="primary"
          class="secondary--text editProfileButton"
          fixed
          bottom
          right
        >Save Profile</v-btn>
      </v-card-actions>
      <v-card-title class="userBioHeader">Biography</v-card-title>
      <v-card-text>
        <input v-bind:value="userBio" class="userBio" />
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
//import axios from 'axios';
export default {
  name: 'Profile',
  components: {},
  data: () => ({
    firstName: this.user.firstName,
    lastName: this.user.lastName,
    userName: this.user.username,
    email: this.user.email,
    country: this.user.country,
    city: this.user.city,

    userBio: 'This is the user biography',
  }),
  computed: mapState({
    user: state => state.loggedUser,
  }),
  methods: {
    submitForm() {
      //   const previousThis = this;
      //   axios
      //     .put('http://127.0.0.1:5000/users/' + this.user.user_id, {
      //       user_id: this.user.user_id,
      //       username: this.updatedUser.userName,
      //       password: this.user.password,
      //       first_name: this.updatedUser.firstName,
      //       last_name: this.updatedUser.lastName,
      //       email: this.user.email,
      //       country: this.updatedUser.country,
      //       city: this.updatedUser.city,
      //     })
      //     .then(function(response) {
      //       let user = response.data;
      //       previousThis.$store.commit('loadUser', user);
      //       previousThis.$router.push('/profile');
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
      console.log(this.firstName);
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/Profile.css';
</style>
