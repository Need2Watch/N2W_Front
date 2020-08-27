import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from "vuetify";
import N2wSeasonsList from '@/components/tvSeriesView/N2wSeasonsList.vue';

describe('N2wSeasonsList.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(N2wSeasonsList, {
      localVue,
      vuetify,
    });
  });
  it('should render the list of seasons of a given tv serie', () => {
    expect(wrapper.find('[data-testid="seasons-list"]').exists()).toBe(true);
  });
});
