import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import N2wTerms from '../N2wTerms.vue';
describe('N2wTerms.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(N2wTerms, {
      localVue,
      vuetify,
    });
  });
  it('should render the terms dialog', () => {
    expect(wrapper.find('[data-testid="terms-dialog"]').exists()).toBe(true);
  });
});
