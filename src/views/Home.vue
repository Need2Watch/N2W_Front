<template>
  <div>
    <n2w-carousel v-bind:items="this.items"></n2w-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

import N2wCarousel from '../components/N2wCarousel.vue';
export default {
  name: 'Home',
  components: {
    N2wCarousel,
  },
  data() {
    return {
      items: [
        {
          name: 'The Office',
          rating: 9.8,
          image: 'https://placehold.it/182x269',
        },
        {
          name: 'Doctor Who',
          rating: 10,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
        {
          name: 'The Mandalorian',
          rating: 9.8,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
        {
          name: '1917',
          rating: 5.4,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
        {
          name: 'Fight Club',
          rating: 6.2,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
        {
          name: 'Narcos',
          rating: 7,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
        {
          name: 'The Office',
          rating: 3.5,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
        {
          name: 'You',
          rating: 8,
          image: 'https://placehold.it/182x269',
          overlay: false,
        },
      ],
    };
  },
};
</script>
