import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '@/store/index';
import N2wNavBar from '@/components/mainView/N2wNavBar.vue';
describe('N2wNavBar.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Router);
    vuetify = new Vuetify();
    wrapper = mount(N2wNavBar, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
    });
  });
  it('should render the NavBar', () => {
    expect(wrapper.find('[data-testid="navbar"]').exists()).toBe(true);
  });
});
