<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col md="6" sm="12" class="d-flex justify-center">
        <v-avatar size="300">
          <v-img :src="this.loggedUser.profilePicture"></v-img>
        </v-avatar>
      </v-col>
      <v-col md="4" sm="12" class="text-md-left text-center">
        <h2>{{this.loggedUser.firstName}} {{this.loggedUser.lastName}}</h2>
        <h2>@{{this.loggedUser.username}}</h2>
        <h2>{{this.loggedUser.email}}</h2>
        <h2>{{this.loggedUser.city}}, {{this.loggedUser.country}}</h2>
        <h3>Biography</h3>
        <p>{{userBio}}</p>
        <v-btn to="/editProfile" rounded color="primary" class="secondary--text mr-2">Edit Profile</v-btn>
        <v-btn rounded color="red" class="n2wwhite--text" @click="logOut">Log Out</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      userBio: 'This is my biography',
    };
  },
  computed: mapState({
    loggedUser: (state) => state.loggedUser,
  }),
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
};
</script>
