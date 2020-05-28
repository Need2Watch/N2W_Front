<template>
  <div hover raised class="calendarSideBar n2wgray">
    <v-list id="event-list" class="eventList" color="transparent">
      <v-list-item-group v-model="item">
        <v-list-item v-for="item in this.scheduledEvents" :key="item">
          <v-list-item-content>
            <v-list-item-title>{{item.name}}</v-list-item-title>
            <v-list-item-subtitle>{{item.start}} - {{item.end}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'N2wCalendar',
  data: () => ({}),
  computed: mapState({
    loggedUser: state => state.loggedUser,
    scheduledEvents: state => state.scheduledEvents,
  }),
};
</script>
<style scoped>
@import '../assets/styles/N2wCalendarSidebar.css';
</style>