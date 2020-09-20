<template>
  <v-menu data-testid="user-menu" v-if="loggedUser.userId" offset-y>
    <template v-slot:activator="{ on }" v-bind:loggedUser="loggedUser">
      <v-btn color="transparent" tile depressed height="100%" v-on="on" class="hidden-md-and-down">
        <v-avatar size="40" class="mr-3">
          <v-img :src="loggedUser.profilePicture"></v-img>
        </v-avatar>
        <v-list-item-title>{{loggedUser.username}}</v-list-item-title>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list id="menu-item-list" class="pa-0">
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        :id="item.id"
      >{{item.title}}</v-list-item>
      <v-btn tile color="red" width="100%" @click="logOut">Logout</v-btn>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters({ loggedUser: 'loggedUser/loggedUser' }),
  },
})
export default class N2wUserMenu extends Vue {
  menuItems = [
    { id: 'profile', title: 'View Profile', path: '/profile' },
    { id: 'edit-profile', title: 'Edit Profile', path: '/editProfile' },
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
<style scoped>
.v-menu__content {
  right: 0px !important;
  left: auto !important;
}
</style>