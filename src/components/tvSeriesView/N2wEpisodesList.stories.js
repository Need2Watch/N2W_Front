import { action } from '@storybook/addon-actions';
import N2wEpisodesList from './N2wEpisodesList';
export default {
  title: 'N2wEpisodesList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const N2wEpisodesListTemplate = `<N2wEpisodesList />`;

// default task state
export const Default = () => ({
  components: { N2wEpisodesList },
  template: N2wEpisodesListTemplate,
  props: {},
  methods: {},
});
