import {
  ScheduledEventsState,
  ScheduledEvent,
} from '../interfaces/scheduledEvents';
import { ActionContext } from 'vuex';

const state: ScheduledEventsState = {
  scheduledEvents: [],
};

const actions = {
  scheduleEvents(
    context: ActionContext<ScheduledEventsState, ScheduledEventsState>,
    payload: Array<ScheduledEvent>,
  ) {
    context.commit('SCHEDULE_EVENTS', payload);
  },
};

const getters = {
  scheduledEvents(state: ScheduledEventsState): ScheduledEventsState {
    return state;
  },
};

const mutations = {
  SCHEDULE_EVENTS(state: ScheduledEventsState, payload: Array<ScheduledEvent>) {
    this.state.scheduledEvents = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters,
};
