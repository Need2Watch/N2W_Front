import Episode from './Episode';

export default {
  title: 'Episode',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const EpisodeTemplate = `<Episode title="Rose" season=2 episode=1 description="Descripción del episodio. Esta es la descripcion, es muuuuuuy larga y ocupa varios renglones.En general es una buena serie :)."></Episode>`;

// default task state
export const Default = () => ({
  components: { Episode },
  template: EpisodeTemplate,
  props: {},
  methods: {},
});
