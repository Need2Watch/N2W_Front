<template>
  <v-navigation-drawer app>
    <v-list-item class="pa-0">
      <v-list-item-content class="pa-0">
        <v-btn
          class="my-0"
          v-for="(item,index) in sideBarItems"
          :key="index"
          :to="item.path"
          tile
          color="transparent"
          depressed
          height="50px"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <span>{{ item.title}}</span>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
    <v-btn fixed bottom rounded width="80%" class="ml-6 red white--text" @click="logOut">Logout</v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class N2wSideBar extends Vue {
  @Prop({ default: false })
  value: boolean = false;

  sideBarItems = [
    { title: 'My Profile', path: '/profile', icon: 'mdi-account' },
    { title: 'Calendar', path: '/calendar', icon: 'mdi-calendar' },
    { title: 'Movies', path: '/movies', icon: 'mdi-movie' },
    {
      title: 'TV Series',
      path: '/tvSeries',
      icon: 'mdi-television-classic',
    },
    { title: 'Collection', path: '/collection', icon: 'mdi-database' },
  ];

  logOut() {
    let user = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      userId: '',
      country: '',
      city: '',
      profilePicture: '',
    };
    this.$store.dispatch('loggedUser/loadUser', user);
    this.$router.push('/signIn');
  }
}
</script>