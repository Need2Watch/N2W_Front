import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '@/store/index';
import N2wSearchBar from '../N2wNavBar/N2wSearchBar.vue';
describe('N2wSearchBar.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Router);
    vuetify = new Vuetify();
    wrapper = mount(N2wSearchBar, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
    });
  });
  it('should render the SearchBar', () => {
    expect(wrapper.find('[data-testid="searchbar"]').exists()).toBe(true);
  });
});
