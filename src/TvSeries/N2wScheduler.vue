<template>
  <v-card
    data-testid="schedule-card"
    color="secondary"
    v-bind="$attrs"
    outlined
  >
    <v-card-title>
      How many episodes would you like to see per day?
    </v-card-title>

    <v-container class="center">
      <v-row>
        <v-col>
          <v-btn-toggle v-model="toggle_none">
            <v-btn flat v-for="item in 7" v-bind:key="item">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>

    <v-card-text> You would catch up 25th June 2020 </v-card-text>

    <v-row>
      <v-col class="d-flex flex-column align-center" cols="6">
        <v-btn color="primary">Add to calendar</v-btn>
      </v-col>
      <v-col class="d-flex flex-column align-center" cols="6">
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'N2wScheduler',
};
</script>
