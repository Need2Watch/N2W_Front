<template>
  <v-container fill-height fluid class="pa-0">
    <v-row class="fill-height">
      <v-col md="3" cols="12" class="d-none d-md-flex pa-0">
        <n2w-calendar-events-list class="fill-height n2wgray" />
      </v-col>
      <v-col md="9" cols="12" class="pa-0">
        <n2w-calendar></n2w-calendar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import N2wCalendarEventsList from './N2wCalendarEventsList';
import N2wCalendar from './N2wCalendar';
export default {
  name: 'Calendar',
  components: {
    N2wCalendarEventsList,
    N2wCalendar,
  },
};
</script>
<style scoped>
.calendar {
  width: 100%;
  height: 100%;
}
</style>