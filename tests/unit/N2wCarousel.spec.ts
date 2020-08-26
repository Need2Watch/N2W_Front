import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '../../src/store/index';
import N2wCarousel from '@/components/moviesView/N2wCarousel.vue';
import { Movie } from '../../src/store/interfaces/movies';
describe('N2wCarousel.vue', () => {
  let localVue;
  let vuetify;
  let wrapper: any;
  let carouselItems: Array<Movie> = [];
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
    const carouselItems = [
      {
        following: false,
        genres: [],
        movie_id: 0,
        overview: '',
        poster_url: '',
        rating: 0,
        title: '',
        watched: false,
      },
    ];
    expect(wrapper.find('[data-testid="carousel"]').exists()).toBe(true);
  });
});
