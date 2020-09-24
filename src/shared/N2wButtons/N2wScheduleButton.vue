<template>
  <v-dialog data-testid="schedule-dialog" width="800" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn v-bind="$attrs" v-on="on" class="primary secondary--text"
        >SCHEDULE</v-btn
      >
    </template>

    <v-card>
      <v-row>
        <v-card-title primary-title
          >How many episodes would you like to see per day?</v-card-title
        >
      </v-row>
      <v-row> </v-row>
      <v-row> </v-row>
      <v-row> </v-row>
      <v-row> </v-row>
      <v-card-text>
        <p>You would catch up 25th June 2020</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'N2wScheduleButton',
  data: () => ({
    dialog: false,
  }),
};
</script>
