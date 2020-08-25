<template>
  <v-list class="pa-6">
    <v-list-item-group>
      <v-list-item v-for="(item, index) in this.scheduledEvents" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{item.name}}</v-list-item-title>
          <v-list-item-subtitle>{{item.start}} - {{item.end}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'N2wCalendar',
  computed: {
    scheduledEvents() {
      return this.$store.getters['scheduledEvents/scheduledEvents'];
    },
  },
};
</script>