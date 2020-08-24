import N2wEpisodeInfo from './N2wEpisodeInfo';

export default {
  title: 'N2wEpisodeInfo',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const N2wEpisodeInfoTemplate = `<N2wEpisodeInfo title="Rose" season=2 episode=1 description="Descripción del episodio. Esta es la descripcion, es muuuuuuy larga y ocupa varios renglones.En general es una buena serie :)."></N2wEpisodeInfo>`;

// default task state
export const Default = () => ({
  components: { N2wEpisodeInfo },
  template: N2wEpisodeInfoTemplate,
  props: {},
  methods: {},
});
