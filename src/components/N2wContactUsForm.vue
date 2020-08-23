<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field label="First Name" v-model="name"></v-text-field>
    <v-text-field label="Last Name" v-model="email"></v-text-field>
    <v-text-field label="Username" v-model="regarding"></v-text-field>
    <v-text-area label="City" v-model="message"></v-text-area>
    <v-btn class="mr-2 primary secondary--text" type="submit">SEND IT!</v-btn>
    <v-checkbox
      v-model="checkbox"
      v-on:keyup.enter="submitForm"
      :error-messages="checkboxErrors"
      label="I have read and accept the terms and conditions."
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>Read the
    <n2w-privacy-policy />
  </v-form>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import N2wPrivacyPolicy from '../components/N2wPrivacyPolicy.vue';
export default {
  name: 'N2wContactUsForm',
  components: {
    N2wPrivacyPolicy,
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
  data() {
    return {
      name: '',
      email: '',
      regarding: '',
      message: '',
      checkbox: false,
    };
  },
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
    onSubmit() {
      let contactMessage = {
        name: this.name,
        email: this.email,
        regarding: this.regarding,
        message: this.message,
      };
      console.log(contactMessage); //Enviar el contactMessage
      this.$emit('contact-us-message-submitted', contactMessage); //Llama a la pag de success
    },
    contactSuccess() {
      this.$router.push('/contactUsSuccess');
    },
  },
};
</script>