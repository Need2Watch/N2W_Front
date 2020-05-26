<template>
  <v-app
    id="app"
    style="
    background: linear-gradient(0deg, rgba(27,38,54,1) 0%, rgba(32,62,104,1) 100%);"
  >
    <n2w-nav-bar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import N2wSignInForm from './components/N2wSignInForm';
import N2wNavBar from './components/N2wNavBar';

export default {
  name: 'App',
  components: {
    N2wNavBar,
    N2wSignInForm,
  },
  data: () => ({
    fromLogin: '',
  }),
};
</script>
<style>
</style>
