<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col md="6" cols="12" class="d-flex justify-center">
        <v-avatar size="300">
          <v-img :src="this.loggedUser.profilePicture"></v-img>
        </v-avatar>
      </v-col>
      <v-col md="4" cols="12">
        <v-form @submit.prevent="submitForm">
          <v-text-field
            label="First Name"
            v-model="firstName"
            required
          ></v-text-field>
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
          <v-btn class="primary secondary--text" type="submit"
            >Save Profile</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';
import countries from '../assets/data/countries.ts';
import { mapGetters } from 'vuex';
export default {
  name: 'EditProfile',
  data: function () {
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
  computed: {
    ...mapGetters({ loggedUser: 'loggedUser/loggedUser' }),
  },
  methods: {
    submitForm() {
      const previousThis = this;
      axios
        .put('http://127.0.0.1:5000/users/' + this.loggedUser.userId, {
          username: this.username,
          first_name: this.firstName,
          last_name: this.lastName,
          country: this.country,
          city: this.city,
        })
        .then(() => {
          console.log(previousThis.loggedUser.userId);
          let updatedUser = {
            user_id: previousThis.loggedUser.userId,
            username: previousThis.username,
            password: previousThis.loggedUser.password,
            email: previousThis.loggedUser.email,
            profile_picture: previousThis.loggedUser.profilePicture,
            first_name: previousThis.firstName,
            last_name: previousThis.lastName,
            country: previousThis.country,
            city: previousThis.city,
          };
          console.log(updatedUser);
          previousThis.$store.dispatch('loggedUser/loadUser', updatedUser);
          previousThis.$router.push('/profile');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.firstName = this.loggedUser.firstName;
    this.lastName = this.loggedUser.lastName;
    this.username = this.loggedUser.username;
    this.email = this.loggedUser.email;
    this.city = this.loggedUser.city;
    this.country = this.loggedUser.country;
  },
};
</script>
