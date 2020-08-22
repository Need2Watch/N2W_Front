<template>
  <v-card raised height="100%" class="n2wgray formCard">
    <form class="pa-12" @submit.prevent="submitForm">
      <v-text-field
        v-model="firstName"
        v-on:keyup.enter="submitForm"
        :error-messages="firstNameErrors"
        :counter="16"
        label="First Name"
        required
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        v-on:keyup.enter="submitForm"
        :error-messages="lastNameErrors"
        :counter="16"
        label="Last Name"
        required
        @input="$v.lastName.$touch()"
        @blur="$v.lastName.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        v-on:keyup.enter="submitForm"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="username"
        v-on:keyup.enter="submitForm"
        :error-messages="usernameErrors"
        :counter="16"
        label="Username"
        required
        @input="$v.username.$touch()"
        @blur="$v.username.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        v-on:keyup.enter="submitForm"
        :error-messages="passwordErrors"
        :counter="16"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-select
        :items="countries"
        v-on:keyup.enter="submitForm"
        v-model="country"
        name="country"
        required
        item-text="countryName"
        label="Select a country"
      />
      <v-text-field
        v-model="city"
        type="city"
        v-on:keyup.enter="submitForm"
        :error-messages="cityErrors"
        label="City"
        required
        @input="$v.city.$touch()"
        @blur="$v.city.$touch()"
      ></v-text-field>
      <n2w-terms></n2w-terms>
      <v-checkbox
        v-model="checkbox"
        v-on:keyup.enter="submitForm"
        :error-messages="checkboxErrors"
        label="I have read and accept the terms and conditions."
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>
      <v-btn class="mr-4 mt-4" type="submit">SUBMIT</v-btn>
      <v-btn class="mt-4" @click="clear">CLEAR</v-btn>
    </form>
    <p class="ml-12">
      Already have an account?
      <router-link to="/signIn" class="decoration-none">
        <a class="primary--text">Sign In</a>
      </router-link>
    </p>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import { v4 as uuidv4 } from 'uuid';
import countries from '../data/countries.js';
import N2wTerms from '../components/N2wTerms';
import axios from 'axios';

export default {
  name: 'N2wSignUpForm',
  components: {
    N2wTerms,
  },
  mixins: [validationMixin],
  validations: {
    firstName: { required, maxLength: maxLength(16) },
    lastName: { required, maxLength: maxLength(16) },
    email: { required, email },
    username: { required, maxLength: maxLength(16) },
    password: { required, maxLength: maxLength(16) },
    city: { required, name },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    country: '',
    city: '',
    select: null,
    countries: countries,
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push('You must agree to continue!');
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push('Item is required');
      return errors;
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength &&
        errors.push('First Name must be at most 16 characters long');
      !this.$v.firstName.required && errors.push('First Name is required.');
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push('Last Name must be at most 16 characters long');
      !this.$v.lastName.required && errors.push('Last Name is required.');
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.maxLength &&
        errors.push('Username must be at most 16 characters long');
      !this.$v.username.required && errors.push('Username is required.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push('Password must be at most 16 characters long');
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) return errors;
      !this.$v.city.required && errors.push('City is required');
      return errors;
    },
  },

  methods: {
    submitForm() {
      if (!this.$v.$touch.$dirty) {
        const previousThis = this;
        axios
          .post('http://127.0.0.1:5000/users', {
            user_id: uuidv4(),
            username: this.username,
            password: this.password,
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            country: this.country,
            city: this.city,
          })
          .then(function (response) {
            let user = response.data;
            previousThis.$store.commit('loadUser', user);
            previousThis.$router.push('/');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    clear() {
      this.$v.$reset();
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.password = '';
      this.email = '';
      this.country = '';
      this.city = '';
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>