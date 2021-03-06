import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '@/store/index';
import N2wSignUpForm from '../N2wSignUpForm.vue';
describe('N2wSignUpForm.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Router);
    vuetify = new Vuetify();
    wrapper = mount(N2wSignUpForm, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
    });
  });
  it('should render the Sign Up form', () => {
    expect(wrapper.find('[data-testid="sign-up-form"]').exists()).toBe(true);
  });
});
