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

    <v-container>
      <v-row>
        <v-spacer />
        <v-col
          class="d-flex flex-column align-center"
          cols="1"
          v-for="index in 7"
          v-bind:key="index"
        >
          <p>{{ weekDays[index - 1] }}</p>
          <vue-numeric-input
            v-model="episodesPerDay[index - 1]"
            :min="0"
            size="40px"
            align="center"
            controls-type="updown"
          ></vue-numeric-input>
        </v-col>
        <v-spacer />
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
import VueNumericInput from 'vue-numeric-input';

export default {
  name: 'N2wScheduler',
  data: () => ({
    weekDays: ['M', 'T', 'W', 'R', 'F', 'S', 'U'],
    episodesPerDay: [0, 0, 0, 0, 0, 0, 0],
  }),
  computed: {
    episodesPerWeek: function () {
      return this.episodesPerDay.reduce((a, b) => a + b, 0);
    },
  },
  components: {
    VueNumericInput,
  },
};
</script>

<style>
.vue-numeric-input.updown {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #ffffff !important;
}
.vue-numeric-input.updown .numeric-input {
  padding-right: 5px !important;
  padding-left: 5px !important;
}
.vue-numeric-input.updown .btn {
  background: gold !important;
}
.vue-numeric-input.updown .btn-increment {
  height: 1.5rem;
  width: 100%;
  right: 0 !important;
  left: 0 !important;
  top: 0 !important;
  bottom: auto !important;
}
.vue-numeric-input.updown .btn-decrement {
  height: 1.5rem;
  width: 100%;
  left: 0 !important;
  right: 0 !important;
  top: auto !important;
  bottom: 0 !important;
}
</style>
