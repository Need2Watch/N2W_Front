import SeasonSelector from './SeasonSelector';

export default {
  title: 'SeasonSelector',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const SeasonSelectorTemplate = `<SeasonSelector :seasons=14/>`;

// default task state
export const Default = () => ({
  components: { SeasonSelector },
  template: SeasonSelectorTemplate,
  props: {},
  methods: {},
});
