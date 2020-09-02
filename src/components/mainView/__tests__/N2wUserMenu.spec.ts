import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store/index';
import N2wUserMenu from '@/components/mainView/N2wUserMenu.vue';

export interface menuItem {
  id: string;
  title: string;
  path: string;
}

describe('N2wUserMenu.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  let menuItems: Array<menuItem> = [
    { id: 'profile', title: 'View Profile', path: '/profile' },
    { id: 'edit-profile', title: 'Edit Profile', path: '/editProfile' },
  ];

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wUserMenu, {
      localVue,
      vuetify,
      store,
      stubs: { RouterLink: RouterLinkStub },
      propsData: {
        menuItems: menuItems,
      },
    });
  });
  it('should render the user Menu', () => {
    expect(wrapper.find('[data-testid="user-menu"]').exists()).toBe(true);
  });
  it('should render the buttons with correct routes', () => {
    const profileButton = wrapper.find('#profile');
    expect(profileButton.props('to')).toBe('/profile');

    const editProfileButton = wrapper.find('#edit-profile');
    expect(editProfileButton.props('to')).toBe('/editProfile');
  });
});
