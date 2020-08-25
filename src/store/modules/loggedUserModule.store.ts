import { LoggedUserState, User } from '../interfaces/loggedUser';

const state: LoggedUserState = {
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
  loadUser(context: any, payload: User) {
    context.commit('LOAD_USER', payload);
  },
};

const getters = {
  loggedUser(state: LoggedUserState): LoggedUserState {
    return state;
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
  getters,
};
