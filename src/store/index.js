import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      user_id: '',
      country: '',
      city: '',
      profilePicture: '',
    },
  },
  getters: {},
  mutations: {
    loadUser(state, payload) {
      state.loggedUser.firstName = payload.first_name;
      state.loggedUser.lastName = payload.last_name;
      state.loggedUser.username = payload.username;
      state.loggedUser.email = payload.email;
      state.loggedUser.password = payload.password;
      state.loggedUser.user_id = payload.user_id;
      state.loggedUser.country = payload.country;
      state.loggedUser.city = payload.city;
      state.loggedUser.profilePicture = payload.profile_picture;
    },
  },
  actions: {},
});
