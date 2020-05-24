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
          image:
            'https://mypostercollection.com/wp-content/uploads/2019/06/the-office-poster-1.jpg',
        },
        {
          name: 'Doctor Who',
          rating: 10,
          image:
            'https://cdn11.bigcommerce.com/s-wq5l7bzi/images/stencil/1280x1280/products/2175/1328/ST5590__59739.1421706588.jpg?c=2&imbypass=on',
        },
        {
          name: 'Fight Club',
          rating: 6.2,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81Luju2cHuL._AC_SY679_.jpg',
        },
        {
          name: 'The Mandalorian',
          rating: 9.8,
          image: 'https://placehold.it/182x273',
        },
        {
          name: '1917',
          rating: 5.4,
          image:
            'https://cdn.shopify.com/s/files/1/0265/2769/4934/products/nineteen_seventeen_ver3_xxlg_1024x1024@2x.jpg?v=1574222489',
        },
        {
          name: 'Narcos',
          rating: 7,
          image: 'https://placehold.it/182x273',
        },
        {
          name: 'The Office',
          rating: 3.5,
          image: 'https://placehold.it/182x273',
        },
        {
          name: 'You',
          rating: 8,
          image: 'https://placehold.it/182x273',
        },
      ],
    };
  },
};
</script>
