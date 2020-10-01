<template>
  <div>
    <n2w-side-bar
      v-if="sidebar"
      color="secondary"
      app
      disable-resize-watcher
      v-model="sideBarOpen"
    />
    <v-app-bar data-testid="navbar" color="secondary" app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon
          @click.close="sideBarOpen = changeSideBar"
        ></v-app-bar-nav-icon>
      </span>
      <router-link to="/" class="hidden-md-and-down pa-4">
        <v-img
          alt="n2w_logo"
          width="80px"
          src="../../assets/img/logo.png"
        ></v-img>
      </router-link>
      <v-btn
        height="100%"
        text
        tile
        class="hidden-sm-and-down"
        v-for="item in navBarItems"
        @click="activeBtn = item.title"
        :class="{ activeBtn: activeBtn === item.title }"
        :key="item.title"
        :to="item.path"
        :id="item.id"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span class="hidden-md-and-down">{{ item.title }}</span>
      </v-btn>
      <v-spacer />

      <n2w-search-bar></n2w-search-bar>

      <v-btn
        id="calendar"
        to="/calendar"
        icon
        class="hidden-md-and-down primary mx-2"
      >
        <v-icon color="secondary" size="30">mdi-calendar</v-icon>
      </v-btn>
      <v-btn
        v-if="!this.loggedUser.userId"
        height="100%"
        tile
        depressed
        to="/signIn"
        class="n2wgray y ml-3 secondary"
        >SIGN IN</v-btn
      >
      <v-btn
        v-if="!this.loggedUser.userId"
        height="100%"
        tile
        depressed
        to="/signUp"
        class="primary black--text"
        >SIGN UP</v-btn
      >

      <n2w-user-menu />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import N2wSearchBar from './N2wSearchBar.vue';
import N2wSideBar from './N2wSideBar.vue';
import N2wUserMenu from './N2wUserMenu.vue';
import { mapGetters } from 'vuex';

@Component({
  components: { N2wSearchBar, N2wSideBar, N2wUserMenu },
  computed: {
    ...mapGetters({ loggedUser: 'loggedUser/loggedUser' }),
    changeSideBar() {
      return !this.$data.sideBarOpen;
    },
  },
})
export default class N2wNavBar extends Vue {
  @Prop({ default: false })
  sidebar: boolean;

  activeBtn = '';
  sideBarOpen = false;
  navBarItems = [
    { id: 'movies', title: 'Movies', path: '/movies', icon: 'mdi-movie' },
    {
      id: 'tv-series',
      title: 'TV Series',
      path: '/tvSeries',
      icon: 'mdi-television-classic',
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      path: '/contactUs',
      icon: 'mdi-email-outline',
    },
  ];
  items = [{ title: 'Edit Profile', path: '/editProfile' }];
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
<style scoped>
.activeBtn {
  padding-top: 3px !important;
  border-bottom: solid 3px #fbc500 !important;
}
</style>