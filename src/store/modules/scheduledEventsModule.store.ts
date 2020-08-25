import {
  ScheduledEventsState,
  ScheduledEvent,
} from '../interfaces/scheduledEvents';

const state: ScheduledEventsState = {
  scheduledEvents: [],
};

const actions = {
  scheduleEvents(context: any, payload: Array<ScheduledEvent>) {
    context.commit('SCHEDULE_EVENTS', payload);
  },
};

const getters = {
  scheduledEvents(): ScheduledEventsState {
    return state;
  },
};

const mutations = {
  SCHEDULE_EVENTS(state: ScheduledEventsState, payload: Array<ScheduledEvent>) {
    state.scheduledEvents = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters,
};
