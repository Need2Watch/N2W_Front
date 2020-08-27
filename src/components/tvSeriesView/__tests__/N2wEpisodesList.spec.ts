import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from "vuetify";
import N2wEpisodesList from '@/components/tvSeriesView/N2wEpisodesList.vue';

describe('N2wEpisodesList.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(N2wEpisodesList, {
      localVue,
      vuetify,
    });
  });
  it('should render the list of episodes of a given season', () => {
    expect(wrapper.find('[data-testid="episodes-list"]').exists()).toBe(true);
  });
});
