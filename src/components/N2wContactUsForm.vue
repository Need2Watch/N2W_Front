<template>
  <div class="contactUsForm">
    <p class="tittle">GET IN TOUCH</p>

    <form class @submit.prevent="onSubmit">
      <p>
        <input
          class="textInputs"
          type="text"
          id="name"
          v-model="name"
          placeholder="Name..."
          required
        />
      </p>
      <p>
        <input
          class="textInputs"
          type="text"
          id="email"
          v-model="email"
          placeholder="Email..."
          required
        />
      </p>
      <p>
        <input
          class="textInputs"
          type="text"
          id="regarding"
          v-model="regarding"
          placeholder="Regarding..."
          required
        />
      </p>
      <p>
        <textarea
          class="textInputs"
          type="text"
          id="message"
          v-model="message"
          placeholder="Message..."
          required
        ></textarea>
      </p>
      <p class="terms-text">
        <input type="checkbox" id="terms" v-model="terms" required />
        I have read and accept the
        <n2w-privacy-policy></n2w-privacy-policy>.
      </p>
      <p>
        <input v-on:click="contactSuccess" type="submit" value="SEND IT!" />
      </p>
    </form>
  </div>
</template>
<script>
import N2wPrivacyPolicy from '../components/N2wPrivacyPolicy.vue';
export default {
  name: 'N2wContactUsForm',
  components: {
    N2wPrivacyPolicy,
  },
  data() {
    return {
      name: '',
      email: '',
      regarding: '',
      message: '',
      terms: false,
    };
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
<style scoped>
@import '../assets/styles/N2wContactUsForm.css';
</style>