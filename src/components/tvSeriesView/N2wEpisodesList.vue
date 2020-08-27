<template>
  <v-container data-testid="episodes-list" class="secondary" fill-height fluid>
    <v-row align="center">
      <v-col>
        <p class="font-weight-black">Episodes</p>
      </v-col>
      <v-spacer />
      <v-col>
        <v-btn text> <v-icon left>mdi-eye</v-icon>Mark season as seen </v-btn>
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-list color="transparent">
        <v-list-item
          v-for="(item, index) in episodes"
          :key="item.title"
          @click="updateSelectedEpisode(index)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ index }}. {{ item.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn v-if="item.seen" icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn v-if="!item.seen" icon>
              <v-icon>mdi-eye-off</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'N2wEpisodesList',
  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateSelectedEpisode(episode) {
      this.$emit('clickedEpisode', episode);
    },
  },
};
</script>
<style scoped></style>
