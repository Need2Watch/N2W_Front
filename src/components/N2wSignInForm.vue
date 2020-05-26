<template>
  <v-card raised height="100%" class="n2wgray formCard">
    <v-img width="50%" class="logo" src="../assets/img/logo.png"></v-img>
    <form class="pa-5" action="/login" method="get">
      <v-text-field
        v-model="username"
        :counter="16"
        label="Username"
        required
        @input="$v.username.$touch()"
        @blur="$v.username.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        :counter="16"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-btn class="mr-4 mt-4" type="submit" @click="submit">sign in</v-btn>
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
export default {
  name: 'N2wSignInForm',

  data: () => ({
    username: '',
    password: '',
    select: null,
  }),

  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>