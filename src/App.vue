<template>
  <v-app id="app">
    <n2w-nav-bar sidebar="true" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import N2wNavBar from './shared/N2wNavBar/N2wNavBar.vue';

@Component({
  components: { N2wNavBar },
})
export default class App extends Vue {}
</script>
<style>
#app {
  background: linear-gradient(
    0deg,
    rgba(27, 38, 54, 1) 0%,
    rgba(32, 62, 104, 1) 100%
  ) !important;
}

.v-toolbar__content {
  padding: 0px !important;
}

.slide {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
