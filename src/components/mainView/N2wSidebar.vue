<template>
  <v-navigation-drawer v-bind="$attrs" v-bind:value="value" v-on:input="$emit('input', $event)">
    <v-list-item class="pa-0">
      <v-list-item-content class="pa-0">
        <v-btn
          class="my-0"
          v-for="item in this.sidebarItems"
          :key="item.title"
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

<script>
export default {
  name: 'N2wSidebar',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    sidebarItems: {
      type: Array,
    },
  },
  data() {
    return {};
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
};
</script>