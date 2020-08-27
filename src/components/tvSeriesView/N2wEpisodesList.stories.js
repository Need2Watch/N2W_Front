import N2wEpisodesList from './N2wEpisodesList';

export default {
  title: 'N2wEpisodesList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const episodes = [
  { title: 'Rose', seen: true },
  { title: 'The End of the world', seen: true },
  { title: 'The Unquiet Dead', seen: true },
  { title: 'Aliens on London', seen: true },
  { title: 'World War Three', seen: false },
  { title: 'Dalek', seen: false },
  { title: 'The Long Game', seen: false },
];

const N2wEpisodesListTemplate = `<N2wEpisodesList :episodes=episodes></N2wEpisodesList>`;

// default task state
export const Default = () => ({
  components: { N2wEpisodesList },
  template: N2wEpisodesListTemplate,
  props: {
    episodes: Array,
  },
  methods: {},
});
