import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
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
      propsData: {
        title: 'Titulo del episodio',
        season: 4,
        episode: 23,
        description: 'Esta el la descripcion del episodio',
      },
    });
  });
  it('should render the information of a given episode', () => {
    expect(wrapper.find('[data-testid="episode-info"]').exists()).toBe(true);
  });
  it('should render the title passed as props', () => {
    expect(wrapper.text()).toContain('Titulo del episodio');
  });
  it('should render the season and episode passed as props', () => {
    expect(wrapper.text()).toContain('Season 4, Episode 23');
  });
  it('should render the description passed as props', () => {
    expect(wrapper.text()).toContain('Esta el la descripcion del episodio');
  });
});
