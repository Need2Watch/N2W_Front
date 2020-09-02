import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '@/store/index';
import N2wCalendarEventsList from '@/components/calendarView/N2wCalendarEventsList.vue';

export interface Event {
  name: string;
  start: string;
  end: string;
  color: string;
}

describe('N2wCalendarEventsList.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Router);
    vuetify = new Vuetify();
    wrapper = mount(N2wCalendarEventsList, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
    });
  });
  it('should render the Calendar Events List', () => {
    expect(wrapper.find('[data-testid="events-list"]').exists()).toBe(true);
  });
});
