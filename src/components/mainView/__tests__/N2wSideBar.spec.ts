import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store/index';
import N2wSideBar from '@/components/mainView/N2wSideBar.vue';

export interface sideBarItem {
  id: string;
  title: string;
  path: string;
  icon: string;
}

describe('N2wSideBar.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  let sideBarItems: Array<sideBarItem> = [
    {
      id: 'profile',
      title: 'My Profile',
      path: '/profile',
      icon: 'mdi-account',
    },
    {
      id: 'calendar',
      title: 'Calendar',
      path: '/calendar',
      icon: 'mdi-calendar',
    },
    { id: 'movies', title: 'Movies', path: '/movies', icon: 'mdi-movie' },
    {
      id: 'series',
      title: 'TV Series',
      path: '/tvSeries',
      icon: 'mdi-television-classic',
    },
  ];

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wSideBar, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
      propsData: {
        sideBarItems: sideBarItems,
      },
    });
  });
  it('should render the SideBar', () => {
    expect(wrapper.find('[data-testid="sidebar"]').exists()).toBe(true);
  });
  it('should render the list of items', () => {
    const itemList = wrapper.find('#sidebar-item-list');
    expect(itemList.exists()).toBe(true);
    sideBarItems.map((item) => expect(itemList.text()).toContain(item.title));
  });
  it('should have correct paths in buttons', () => {
    const itemList = wrapper.find('#sidebar-item-list');

    const movieButton = itemList.find('#movies');
    expect(movieButton.props('to')).toBe('/movies');

    const calendarButton = itemList.find('#calendar');
    expect(calendarButton.props('to')).toBe('/calendar');

    const profileButton = itemList.find('#profile');
    expect(profileButton.props('to')).toBe('/profile');

    const tvSeriesButton = itemList.find('#tv-series');
    expect(tvSeriesButton.props('to')).toBe('/tvSeries');
  });
});
