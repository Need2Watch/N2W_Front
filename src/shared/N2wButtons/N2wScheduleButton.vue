<template>
  <v-dialog data-testid="schedule-dialog" width="800" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn v-bind="$attrs" v-on="on" class="primary secondary--text"
        >SCHEDULE</v-btn
      >
    </template>

    <n2w-scheduler />
  </v-dialog>
</template>

<script>
import N2wScheduler from '../../TvSeries/N2wScheduler';

export default {
  name: 'N2wScheduleButton',
  data: () => ({
    dialog: false,
  }),
  components: {
    N2wScheduler,
  },
};
</script>
