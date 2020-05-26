<template>
  <v-card hover raised class="calendarSideBar d-flex flex-column align-center">
    <div class="profileBanner d-flex flex-column align-center">
      <div class="primary profileCircle"></div>
    </div>
    <div class="sidebarInfo d-flex flex-column align-center">
      <router-link
        to="/profile"
        class="decoration-none hidden-md-and-down d-flex flex-column align-center"
      >
        <a class="profileName white--text">Francis Molina</a>
        <a class="profileUsername">rexuswolf</a>
      </router-link>
      <v-list max-height="500px" id="event-list" class="eventList" color="transparent">
        <v-list-item-group v-model="item">
          <v-list-item v-for="(item, i) in events" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'N2wCalendar',
  data: () => ({
    events: [
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
    ],
  }),
};
</script>
<style scoped>
@import '../assets/styles/N2wCalendarSidebar.css';
</style>