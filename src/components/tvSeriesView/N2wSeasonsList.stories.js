import N2wSeasonsList from './N2wSeasonsList';

export default {
  title: 'N2wSeasonsList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const N2wSeasonsListTemplate = `<N2wSeasonsList seasons=14></N2wSeasonsList>`;

// default task state
export const Default = () => ({
  components: { N2wSeasonsList },
  template: N2wSeasonsListTemplate,
  props: {},
  methods: {},
});
