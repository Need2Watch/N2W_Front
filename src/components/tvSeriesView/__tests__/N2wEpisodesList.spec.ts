import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
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
      propsData: {
        episodes: [
          { title: 'Rose', seen: true, description: 'Heeeey' },
          {
            title: 'The End of the world',
            seen: true,
            description: 'Esta es la descripcion de un episodio',
          },
          {
            title: 'The Unquiet Dead',
            seen: true,
            description: 'Esta es una descripcion to rechulona',
          },
          {
            title: 'The Long Game',
            seen: false,
            description: 'Y otra descripcion',
          },
        ],
      },
    });
  });
  it('should render the list of episodes of a given season', () => {
    expect(wrapper.find('[data-testid="episodes-list"]').exists()).toBe(true);
  });
  it('should render the "Mark season as seen" button', () => {
    expect(wrapper.findAllComponents({ name: 'v-btn' })).toHaveLength(5);
    expect(wrapper.text()).toContain('Mark season as seen');
  });
  it("should render all the episodes' titles", () => {
    expect(wrapper.text()).toContain('Rose');
    expect(wrapper.text()).toContain('The End of the world');
    expect(wrapper.text()).toContain('The Unquiet Dead');
    expect(wrapper.text()).toContain('The Long Game');
  });
  it("should render all the episodes' seen icon", () => {
    expect(wrapper.findAllComponents({ name: 'v-icon' })).toHaveLength(5);
  });
  it('should emit "clickedEpisode" event when clicked', () => {
    wrapper.vm.updateSelectedEpisode(5);

    expect(wrapper.emitted('clickedEpisode')).toBeTruthy();
    expect(wrapper.emitted().clickedEpisode[0]).toEqual([5]);
  });
});
