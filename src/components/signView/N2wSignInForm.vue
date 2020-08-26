<template>
  <v-card raised height="100%" class="n2wgray">
    <v-row align="center" justify="center" class="pt-6">
      <v-img max-width="80%" src="../../assets/img/logo-extended.png"></v-img>
    </v-row>
    <form data-testid="sign-in-form" class="pa-12" @submit.prevent="submitForm">
      <v-text-field
        v-on:keyup.enter="submitForm"
        v-model="email"
        type="email"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        v-on:keyup.enter="submitForm"
        v-model="password"
        type="password"
        label="Password"
        required
      ></v-text-field>
      <v-btn class="mr-4 mt-4" type="submit">SIGN IN</v-btn>
    </form>
    <p class="ml-12">
      Want to create an account?
      <router-link to="/signUp">Sign Up</router-link>
    </p>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  name: 'N2wSignInForm',
  data: () => ({
    email: '',
    password: '',
    select: null,
  }),
  methods: {
    submitForm() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/auth/login', {
          email: this.email,
          password: this.password,
        })
        .then(function (response) {
          let user = response.data;
          previousThis.$store.dispatch('loggedUser/loadUser', user);
          previousThis.$router.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>