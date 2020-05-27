<template>
  <v-card raised height="100%" class="n2wgray formCard">
    <v-img width="80%" class="logo" style="margin: 10% auto 5%;" src="../assets/img/logo-extended.png"></v-img>
    <form class="pa-5" @submit.prevent="submitForm">
      <v-text-field v-model="email" type="email" label="Email" required></v-text-field>
      <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
      <v-btn class="mr-4 mt-4" type="submit">SIGN IN</v-btn>
    </form>
    <p class="ml-5">
      Want to create an account?
      <router-link to="/signUp" class="decoration-none">
        <a class="primary--text">Sign Up</a>
      </router-link>
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
        .then(function(response) {
          let user = response.data;
          previousThis.$store.commit('loadUser', user);
          previousThis.$router.push('/');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>