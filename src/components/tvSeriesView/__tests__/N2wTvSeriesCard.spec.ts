import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store/index';
import N2wTvSeriesCard from '@/components/moviesView/N2wTvSeriesCard.vue';
describe('N2wTvSeriesCard.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wTvSeriesCard, {
      localVue,
      vuetify,
      store,
    });
  });
  it('should render the card', () => {
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true);
  });
});
