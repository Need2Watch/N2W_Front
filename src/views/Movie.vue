<template>
  <v-card class="d-flex flex-row align-center" height="100%" width="100%">
    <v-img :src="moviePosterUrl"></v-img>
    <div style="height: 100%; width: 70%" class="d-flex flex-column">
      <v-card-title>{{movieTitle}}</v-card-title>
      <v-card-text class="headline font-weight-bold">
        <h2 class="movieDescription">{{movieDescription}}</h2>
      </v-card-text>
      <v-card-actions>
        <v-btn text>Learn More</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Movie',
  components: {},
  data() {
    return {
      movieTitle: '1917',
      movieDescription:
        'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
      moviePosterUrl:
        'https://i1.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/08/1917-poster.jpg',
    };
  },
};
</script>
