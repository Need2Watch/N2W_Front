import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store/index';
import N2wSideBar from '@/components/mainView/N2wSideBar.vue';
describe('N2wSideBar.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  let sideBarItems: Array<Object> = [];
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wSideBar, {
      localVue,
      vuetify,
      store,
      propsData: {
        items: sideBarItems,
      },
    });
  });
  it('should render the SideBar', () => {
    expect(wrapper.find('[data-testid="sidebar"]').exists()).toBe(true);
  });
});
