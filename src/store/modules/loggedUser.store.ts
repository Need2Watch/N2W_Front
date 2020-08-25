import { LoggedUserState, User } from '../types';

const state = {
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

const actions = {
  loadUser({ commit }: any, payload: User) {
    commit('LOAD_USER', payload);
  },
};

const mutations = {
  LOAD_USER(state: LoggedUserState, payload: User) {
    state.firstName = payload.first_name;
    state.lastName = payload.last_name;
    state.username = payload.username;
    state.email = payload.email;
    state.password = payload.password;
    state.userId = payload.user_id;
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
