import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '@/store/index';
import N2wCalendar from '../N2wCalendar.vue';
describe('N2wCalendar.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Router);
    vuetify = new Vuetify();
    wrapper = mount(N2wCalendar, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
    });
  });
  it('should render the Calendar', () => {
    expect(wrapper.find('[data-testid="calendar"]').exists()).toBe(true);
  });
});
