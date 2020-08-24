<template>
  <form @submit.prevent="submitForm">
    <v-text-field
      v-model="name"
      v-on:keyup.enter="submitForm"
      :error-messages="firstNameErrors"
      :counter="16"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      label="Email"
      v-model="email"
      required
      v-on:keyup.enter="submitForm"
      :error-messages="emailErrors"
      @change="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      label="Regarding"
      v-model="regarding"
      required
      v-on:keyup.enter="submitForm"
      :error-messages="regardingErrors"
      @change="$v.regarding.$touch()"
      @blur="$v.regarding.$touch()"
    ></v-text-field>
    <v-text-field
      label="Message"
      v-model="message"
      v-on:keyup.enter="submitForm"
      :error-messages="messageErrors"
      @change="$v.message.$touch()"
      @blur="$v.message.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      v-on:keyup.enter="submitForm"
      :error-messages="checkboxErrors"
      label="I have read and accept the privacy policy."
      required
      class="mb-2"
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
    <v-btn class="mr-4 primary secondary--text" type="submit">SEND IT!</v-btn>Read the
    <n2w-privacy-policy />
  </form>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import N2wPrivacyPolicy from './N2wPrivacyPolicy.vue';
export default {
  name: 'N2wContactUsForm',
  components: {
    N2wPrivacyPolicy,
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(16) },
    email: { required, email },
    regarding: { required, maxLength: maxLength(128) },
    message: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data: () => {
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
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 16 characters long');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    regardingErrors() {
      const errors = [];
      if (!this.$v.regarding.$dirty) return errors;
      !this.$v.regarding.maxLength &&
        errors.push('Regarding field must be at most 16 characters long');
      !this.$v.regarding.required && errors.push('Regarding field is required');
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.maxLength &&
        errors.push(
          'Message field must be less than 128 characters long and not empty',
        );
      !this.$v.message.required && errors.push('Message field is required');
      return errors;
    },
  },
  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        this.$router.push('/contactUsSuccess');
      }
    },
  },
};
</script>