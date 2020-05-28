<template>
  <v-card height="100%" color="transparent" class="d-flex justify-center align-center">
    <div class="avatarContainer hidden-md-and-down">
      <v-avatar size="300">
        <v-img :src="this.loggedUser.profilePicture"></v-img>
      </v-avatar>
    </div>
    <div class="infoContainer">
      <form @submit.prevent="submitForm">
        <v-text-field label="First Name" v-model="firstName" required></v-text-field>
        <v-text-field label="Last Name" v-model="lastName"></v-text-field>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="City" v-model="city"></v-text-field>
        <v-select
          :items="countries"
          v-model="country"
          name="country"
          required
          item-text="countryName"
          label="Country"
        />
        <v-btn class="mr-4 mt-4 primary secondary--text" type="submit">Save Profile</v-btn>
      </form>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import countries from '../data/countries.js';
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
      countries: countries,
    };
  },
  computed: mapState({
    loggedUser: state => state.loggedUser,
  }),
  methods: {
    submitForm() {
      const previousThis = this;
      axios
        .put('http://127.0.0.1:5000/users/' + this.loggedUser.user_id, {
          user_id: this.loggedUser.user_id,
          username: this.username,
          password: this.loggedUser.password,
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.loggedUser.email,
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
    this.firstName = this.loggedUser.firstName;
    this.lastName = this.loggedUser.lastName;
    this.username = this.loggedUser.username;
    this.email = this.loggedUser.email;
    this.city = this.loggedUser.city;
    this.country = this.loggedUser.country;
  },
};
</script>
<style scoped>
@import '../assets/styles/Profile.css';
</style>
