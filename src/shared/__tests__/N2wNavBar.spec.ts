import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store/index';
import N2wNavBar from '../N2wNavBar.vue';
import N2wSearchBar from '../N2wSearchBar.vue';
import N2wUserMenu from '../N2wUserMenu.vue';

export interface navBarItem {
  id: string;
  title: string;
  path: string;
  icon: string;
}

describe('N2wNavBar.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  let navBarItems: Array<navBarItem> = [
    { id: 'movies', title: 'Movies', path: '/movies', icon: 'mdi-movie' },
    {
      id: 'tv-series',
      title: 'TV Series',
      path: '/tvSeries',
      icon: 'mdi-television-classic',
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      path: '/contactUs',
      icon: 'mdi-email-outline',
    },
  ];
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wNavBar, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
      propsData: {
        navBarItems: navBarItems,
      },
    });
  });
  it('should render the NavBar', () => {
    expect(wrapper.find('[data-testid="navbar"]').exists()).toBe(true);
  });
  it('should render the buttons with correct routes', () => {
    const movieButton = wrapper.find('#movies');
    expect(movieButton.props('to')).toBe('/movies');

    const tvSeriesButton = wrapper.find('#tv-series');
    expect(tvSeriesButton.props('to')).toBe('/tvSeries');

    const contactUsButton = wrapper.find('#contact-us');
    expect(contactUsButton.props('to')).toBe('/contactUs');

    const calendarButton = wrapper.find('#calendar');
    expect(calendarButton.props('to')).toBe('/calendar');
  });

  it('should render the searchBar', () => {
    expect(wrapper.findComponent(N2wSearchBar).exists()).toBe(true);
  });

  it('should render the user Menu', () => {
    expect(wrapper.findComponent(N2wUserMenu).exists()).toBe(true);
  });
});
