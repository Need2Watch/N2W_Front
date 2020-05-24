<template>
  <div>
    <n2w-cinema-card name="Doctor Who" rating=9.8 image="https://placehold.it/182x269"></n2w-cinema-card>
  </div>
</template>

<script>
// @ is an alias to /src

import N2wCinemaCard from '../components/N2wCinemaCard.vue'
export default {
  name: 'Home',
  components: {
    N2wCinemaCard,
  },
  data() {
    return {
    }
  },
};
</script>
