<template>
  <v-navigation-drawer
    data-testid="sidebar"
    v-bind="$attrs"
    v-bind:value="this.value"
    v-on:input="$emit('input', $event)"
  >
    <v-list id="sidebar-item-list">
      <v-list-item class="pa-0">
        <v-list-item-content class="pa-0">
          <v-btn
            class="my-0"
            v-for="(item,index) in sideBarItems"
            :key="index"
            :to="item.path"
            :id="item.id"
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
    </v-list>
    <v-btn fixed bottom rounded width="80%" class="ml-6 red white--text" @click="logOut">Logout</v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class N2wSideBar extends Vue {
  @Prop({ default: false })
  value: boolean;

  sideBarItems = [
    {
      id: 'profile',
      title: 'My Profile',
      path: '/profile',
      icon: 'mdi-account',
    },
    {
      id: 'calendar',
      title: 'Calendar',
      path: '/calendar',
      icon: 'mdi-calendar',
    },
    { id: 'movies', title: 'Movies', path: '/movies', icon: 'mdi-movie' },
    {
      id: 'tv-series',
      title: 'TV Series',
      path: '/tvSeries',
      icon: 'mdi-television-classic',
    },
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