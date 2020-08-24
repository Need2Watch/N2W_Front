const state = {
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

const actions = {
  loadUser({ commit }, payload) {
    commit('LOAD_USER', payload);
  },
};

const mutations = {
  LOAD_USER(state, payload) {
    state.firstName = payload.first_name;
    state.lastName = payload.last_name;
    state.username = payload.username;
    state.email = payload.email;
    state.password = payload.password;
    state.user_id = payload.user_id;
    state.country = payload.country;
    state.city = payload.city;
    state.profilePicture = payload.profile_picture;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
