<template>
  <div>
    <n2w-sidebar
      color="secondary"
      v-if="sidebar"
      v-bind:sidebarItems="sidebarItems"
      v-model="sidebarOpen"
      disable-resize-watcher
      app
    ></n2w-sidebar>

    <v-app-bar color="secondary" app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.close="sidebarOpen = !sidebarOpen"></v-app-bar-nav-icon>
      </span>
      <router-link to="/" class="hidden-md-and-down pa-4">
        <v-img alt="n2w_logo" width="80px" src="../../assets/img/logo.png"></v-img>
      </router-link>
      <v-btn
        height="100%"
        text
        tile
        class="hidden-sm-and-down"
        v-for="item in navBarItems"
        @click="activeBtn = item.title"
        :class="{activeBtn: activeBtn === item.title }"
        :key="item.title"
        :to="item.path"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span class="hidden-md-and-down">{{ item.title}}</span>
      </v-btn>
      <v-spacer />

      <n2w-search-bar></n2w-search-bar>

      <v-btn to="/calendar" icon class="hidden-md-and-down primary mx-2">
        <v-icon color="secondary" size="30">mdi-calendar</v-icon>
      </v-btn>
      <v-btn
        v-if="!this.loggedUser.userId"
        height="100%"
        tile
        depressed
        to="/signIn"
        class="n2wgray y ml-3 secondary"
      >SIGN IN</v-btn>
      <v-btn
        v-if="!this.loggedUser.userId"
        height="100%"
        tile
        depressed
        to="/signUp"
        class="primary black--text"
      >SIGN UP</v-btn>

      <v-menu v-if="this.loggedUser.userId" offset-y>
        <template v-slot:activator="{ on }" v-bind:loggedUser="this.loggedUser">
          <v-btn
            color="transparent"
            tile
            depressed
            height="100%"
            v-on="on"
            class="hidden-md-and-down"
          >
            <v-avatar size="40" class="mr-3">
              <v-img :src="loggedUser.profilePicture"></v-img>
            </v-avatar>
            <v-list-item-title>{{loggedUser.username}}</v-list-item-title>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">{{item.title}}</v-list-item>
          <v-btn tile color="red" width="100%" @click="logOut">Logout</v-btn>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import N2wSearchBar from './N2wSearchBar';
import N2wSidebar from './N2wSidebar';
export default {
  name: 'N2wNavBar',
  components: {
    N2wSearchBar,
    N2wSidebar,
  },
  props: {
    sidebar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeBtn: '',
      sidebarOpen: false,
      navBarItems: [
        { title: 'Movies', path: '/movies', icon: 'mdi-movie' },
        {
          title: 'TV Series',
          path: '/tvSeries',
          icon: 'mdi-television-classic',
        },
        { title: 'Contact Us', path: '/contactUs', icon: 'mdi-email-outline' },
      ],
      menuItems: [
        { title: 'View Profile', path: '/profile' },
        { title: 'Edit Profile', path: '/editProfile' },
      ],
      sidebarItems: [
        { title: 'My Profile', path: '/profile', icon: 'mdi-account' },
        { title: 'Calendar', path: '/calendar', icon: 'mdi-calendar' },
        { title: 'Movies', path: '/movies', icon: 'mdi-movie' },
        {
          title: 'TV Series',
          path: '/tvSeries',
          icon: 'mdi-television-classic',
        },
        { title: 'Collection', path: '/collection', icon: 'mdi-database' },
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
        userId: '',
        country: '',
        city: '',
        profilePicture: '',
      };
      this.$store.dispatch('loggedUser/loadUser', user);
      this.$router.push('/signIn');
    },
  },
  computed: mapState({
    loggedUser: (state) => state.loggedUser,
  }),
};
</script>
<style scoped>
.activeBtn {
  padding-top: 3px !important;
  border-bottom: solid 3px #fbc500 !important;
}

.v-menu__content {
  right: 0px !important;
  left: auto !important;
}
</style>