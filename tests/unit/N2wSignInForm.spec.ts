import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '../../src/store/index';
import N2wSignInForm from '@/components/signView/N2wSignInForm.vue';
describe('N2wSignInForm.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Router);
    vuetify = new Vuetify();
    wrapper = mount(N2wSignInForm, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
    });
  });
  it('should render the SearchBar', () => {
    expect(wrapper.find('[data-testid="sign-in-form"]').exists()).toBe(true);
  });
});
