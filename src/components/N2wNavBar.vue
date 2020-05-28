<template>
  <div>
    <v-navigation-drawer color="secondary" disable-resize-watcher v-model="sidebar" app>
      <v-list height="80%">
        <v-list-item v-if="this.loggedUser.user_id" href="/profile" class="side-bar-profile">
          <v-avatar size="50" class="nav-bar-avatar">
            <v-img :src="this.loggedUser.profilePicture"></v-img>
          </v-avatar>
          <v-list-item-title class="headline">{{this.loggedUser.username}}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in sidebarItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn
        v-if="this.loggedUser.user_id"
        rounded
        width="80%"
        class="ml-6 mb-1 primary black--text"
        to="/editProfile"
      >Edit Profile</v-btn>
      <v-btn
        v-if="this.loggedUser.user_id"
        rounded
        width="80%"
        class="ml-6 red white--text"
        @click="logOut"
      >Logout</v-btn>
    </v-navigation-drawer>

    <v-app-bar color="secondary" app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <router-link to="/" class="hidden-md-and-down d-md-flex align-center n2w-logo">
        <v-img
          aria-label="Need2WatchLogo"
          src="../assets/img/logo.png"
          to="https://stackoverflow.com/questions/55779555/vuetify-create-image-that-links-to-another-page"
        ></v-img>
      </router-link>
      <v-btn
        height="100%"
        text
        class="hidden-sm-and-down"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span class="hidden-md-and-down">{{ item.title}}</span>
      </v-btn>
      <v-spacer />
      <n2w-search-bar></n2w-search-bar>
      <v-btn to="/calendar" icon class="hidden-md-and-down primary">
        <v-icon color="secondary" size="40">mdi-calendar</v-icon>
      </v-btn>
      <v-btn v-if="!this.loggedUser.user_id" depressed to="/signIn" class="ml-3 secondary">SIGN IN</v-btn>
      <v-btn v-if="!this.loggedUser.user_id" depressed to="/signUp" class="secondary">SIGN UP</v-btn>
      <v-card
        v-if="this.loggedUser.user_id"
        flat
        class="transparent d-md-flex align-center hidden-md-and-down"
      >
        <v-list-item class="decoration-none white--text">
          <router-link to="/profile">
            <v-avatar size="50" class="nav-bar-avatar">
              <v-img :src="this.loggedUser.profilePicture"></v-img>
            </v-avatar>
          </router-link>
          <router-link to="/profile">
            <v-list-item-title class="headline n2wwhite--text">{{ this.loggedUser.username }}</v-list-item-title>
          </router-link>
          <v-menu class="secondary" bottom left offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list class="secondary d-flex flex-column">
              <v-list-item>
                <router-link to="/editProfile">
                  <v-btn class="secondary" text width="100%">Edit Profile</v-btn>
                </router-link>
              </v-list-item>
              <v-list-item>
                <v-btn class="secondary" text width="100%" @click="logOut">Logout</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-card>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import N2wSearchBar from './N2wSearchBar';
export default {
  name: 'N2wNavBar',
  components: {
    N2wSearchBar,
  },
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: 'Movies', path: '/', icon: 'mdi-movie' },
        {
          title: 'TV Series',
          path: '/tvSeries',
          icon: 'mdi-television-classic',
        },
        { title: 'Contact Us', path: '/contactUs', icon: 'mdi-email-outline' },
      ],
      sidebarItems: [
        {
          title: 'Calendar',
          path: '/calendar',
          icon: 'mdi-calendar',
        },
        { title: 'Movies', path: '/', icon: 'mdi-movie' },
        {
          title: 'TV Series',
          path: '/tvSeries',
          icon: 'mdi-television-classic',
        },
        { title: 'Contact Us', path: '/contactUs', icon: 'mdi-email-outline' },
      ],
      items: [{ title: 'Edit Profile', path: '/editProfile' }],
    };
  },
  methods: {
    logOut() {
      let user = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        user_id: '',
        country: '',
        city: '',
        profilePicture: '',
      };
      this.$store.commit('loadUser', user);
      this.$router.push('/signIn');
    },
  },
  computed: mapState({
    loggedUser: state => state.loggedUser,
  }),
};
</script>
<style scoped>
@import '../assets/styles/N2wNavBar.css';
</style>