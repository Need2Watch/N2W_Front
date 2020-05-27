<template>
  <v-card height="100%" color="transparent" class="d-flex profileCard">
    <div class="d-flex flex-column align-center">
      <div class="d-flex flex-column align-center profileInfo">
        <form @submit.prevent="submitForm">
          <v-text-field label="First Name" v-model="firstName" required></v-text-field>
          <v-text-field label="Last Name" v-model="lastName"></v-text-field>
          <v-text-field label="Userame" v-model="username"></v-text-field>
          <v-text-field label="City" v-model="city"></v-text-field>
          <v-text-field label="Country" v-model="country"></v-text-field>
          <v-btn class="mr-4 mt-4" type="submit">Save Profile</v-btn>
        </form>
      </div>
    </div>
    <div class="d-flex flex-column profileInfo">
      <v-avatar size="300" class="nav-bar-avatar">
        <v-img :src="this.user.profilePicture"></v-img>
      </v-avatar>
      <v-card-title class="userBioHeader">Biography</v-card-title>
      <v-card-text>
        <input v-bind:value="userBio" class="userBio" />
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
  name: 'EditProfile',
  data: function() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      country: '',
      city: '',
      userBio: 'This is the user biography',
    };
  },
  computed: mapState({
    user: state => state.loggedUser,
  }),
  methods: {
    submitForm() {
      const previousThis = this;
      axios
        .put('http://127.0.0.1:5000/users/' + this.user.user_id, {
          user_id: this.user.user_id,
          username: this.username,
          password: this.user.password,
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.user.email,
          country: this.country,
          city: this.city,
        })
        .then(function(response) {
          let user = response.data;
          previousThis.$store.commit('loadUser', user);
          previousThis.$router.push('/profile');
        })
        .catch(function(error) {
          console.log(error);
        });
      console.log(this.firstName);
    },
  },
  mounted: function() {
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.username = this.user.username;
    this.email = this.user.email;
    this.city = this.user.city;
    this.country = this.user.country;
  },
};
</script>
<style scoped>
@import '../assets/styles/Profile.css';
</style>
