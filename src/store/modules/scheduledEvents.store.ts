const state = {
  scheduledEvents: {},
};

const actions = {
  scheduleEvents({ commit }: any, payload: Object) {
    commit('SCHEDULE_EVENTS', payload);
  },
};

const mutations = {
  SCHEDULE_EVENTS(state: any, payload: Object) {
    state.scheduledEvents = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
