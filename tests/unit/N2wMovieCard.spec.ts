import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '../../src/store/index';
import N2wMovieCard from '@/components/moviesView/N2wMovieCard.vue';
describe('N2wMovieCard.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wMovieCard, {
      localVue,
      vuetify,
      store,
    });
  });
  it('should render the card', () => {
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true);
  });
});
