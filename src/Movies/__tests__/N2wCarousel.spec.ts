import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store/index';
import N2wCarousel from '../N2wCarousel.vue';
import { Movie } from '@/store/interfaces/movies';
describe('N2wCarousel.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  let carouselItems: Array<Movie> = [
    {
      following: false,
      genres: [],
      movie_id: 0,
      overview: 'test',
      poster_url: 'test',
      rating: 0,
      title: 'test',
      watched: false,
    },
  ];
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
    wrapper = mount(N2wCarousel, {
      localVue,
      vuetify,
      store,
      propsData: {
        items: carouselItems,
      },
    });
  });
  it('should render the Carousel', () => {
    expect(wrapper.find('[data-testid="carousel"]').exists()).toBe(true);
  });
});
