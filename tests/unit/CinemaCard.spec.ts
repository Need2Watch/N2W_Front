import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import N2wCinemaCard from '@/components/moviesView/N2wCinemaCard.vue';
describe('N2wCinemaCard.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(N2wCinemaCard, {
      localVue,
      vuetify,
      propsData: { id: 5, name: 'cardName', rating: 0, image: 'imageUrl' },
    });
  });
  it('should render the card name and rating', () => {
    let cardName: string = 'cardName';
    let cardRating: string = '0';
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true);
    expect(wrapper.text()).toMatch(cardName);
    expect(wrapper.text()).toMatch(cardRating);
  });
});
