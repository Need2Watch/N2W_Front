import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import N2wSeasonsList from '../N2wTvSeriesCard/N2wSeasonsList.vue';

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
      propsData: { seasons: 4 },
    });
  });
  it('should render the list of seasons of a given tv serie', () => {
    expect(wrapper.find('[data-testid="seasons-list"]').exists()).toBe(true);
  });
  it('should render all the seasons', () => {
    expect(wrapper.text()).toContain('Season 1');
    expect(wrapper.text()).toContain('Season 2');
    expect(wrapper.text()).toContain('Season 3');
    expect(wrapper.text()).toContain('Season 4');
  });
  it('should emit "clickedSeason" event when clicked', () => {
    wrapper.vm.updateSelectedSeason(2);

    expect(wrapper.emitted('clickedSeason')).toBeTruthy();
    expect(wrapper.emitted().clickedSeason[0]).toEqual([2]);
  });
});
