import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from "vuetify";
import N2wEpisodeInfo from '@/components/tvSeriesView/N2wEpisodeInfo.vue';

describe('N2wEpisodeInfo.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(N2wEpisodeInfo, {
      localVue,
      vuetify,
    });
  });
  it('should render the information of a given episode', () => {
    expect(wrapper.find('[data-testid="episode-info"]').exists()).toBe(true);
  });
});
