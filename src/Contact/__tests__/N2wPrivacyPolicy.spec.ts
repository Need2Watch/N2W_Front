import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import N2wPrivacyPolicy from '../N2wPrivacyPolicy.vue';
describe('N2wPrivacyPolicy.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(N2wPrivacyPolicy, {
      localVue,
      vuetify,
    });
  });
  it('should render the privacy dialog', () => {
    expect(wrapper.find('[data-testid="privacy-dialog"]').exists()).toBe(true);
  });
});
