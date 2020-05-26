<template>
    <div class="contactUsForm">
        <p class="tittle"> GET IN TOUCH </p>

        <form class="" @submit.prevent="onSubmit">
            <p>
                <input class="textInputs" type="text" id="name" v-model="name" placeholder="Name...">
            </p>
            <p>
                <input class="textInputs" type=text id="email" v-model="email" placeholder="Email...">
            </p>
            <p>
                <input class="textInputs" type=text id="regarding" v-model="regarding" placeholder="Regarding...">
            </p>
            <p>
                <textarea class="textInputs" type=text id="message" v-model="message" placeholder="Message..."></textarea>
            </p>
            <p class="terms-text">
                <input type="checkbox" id="terms" v-model="terms">
                I have read and accept the <n2w-privacy-policy></n2w-privacy-policy>.
            </p>
            <p>
                <input type="submit" value="SEND IT!">  
            </p>    
        </form>
    </div>
</template>
<script>
import N2wPrivacyPolicy from '../components/N2wPrivacyPolicy.vue';
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators';
export default {
    name: 'N2wContactUsForm',
    components: {
        N2wPrivacyPolicy,
     },
    mixins: [validationMixin],
    validations: {
    name: { required, maxLength: maxLength(16) },
    email: { required, email },
    regarding: { required, maxLength: maxLength(32) },
    message: { required, minLength: minLength(10) },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
    data() {
        return {
            name: "",
            email: "",
            regarding: "",
            message: "",
            terms: false,
        };
    },
    methods:{
        onSubmit(){
            let contactMessage = {
                name: this.name,
                email: this.email,
                regarding: this.regarding,
                message: this.message
            }
            console.log(contactMessage)                                //Enviar el contactMessage
            this.$emit("contact-us-message-submitted", contactMessage) //Llama a la pag de success
        }
    }
};
</script>
<style scoped>
@import '../assets/styles/N2wContactUsForm.css';
</style>