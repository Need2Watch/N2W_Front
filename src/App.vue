<template>
  <v-app id="app">
    <n2w-nav-bar sidebar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import N2wNavBar from './components/mainView/N2wNavBar';

export default {
  name: 'App',
  components: {
    N2wNavBar,
  },
  data: () => ({}),
};
</script>
<style>
@import './assets/styles/N2w.css';
</style>
