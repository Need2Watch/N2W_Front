<template>
  <v-app
    id="app"
    style="
    background: linear-gradient(0deg, rgba(27,38,54,1) 0%, rgba(32,62,104,1) 100%);"
  >
    <n2w-nav-bar sidebar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import N2wNavBar from './components/N2wNavBar';

export default {
  name: 'App',
  components: {
    N2wNavBar,
  },
  data: () => ({}),
};
</script>
<style>
</style>
