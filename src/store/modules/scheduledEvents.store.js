const state = {
  scheduledEvents: {},
};

const actions = {
  scheduleEvents({ commit }, payload) {
    commit('SCHEDULE_EVENTS', payload);
  },
};

const mutations = {
  SCHEDULE_EVENTS(state, payload) {
    this.state.scheduledEvents = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
