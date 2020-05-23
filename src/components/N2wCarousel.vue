<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel">
        <div class="card-carousel--overflow-container">
            <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }">
            <div class="card-carousel--card" :key="item.title" v-for="item in items">
                <div class="background-card" @mouseover="mouseOver(item.name)" @mouseleave="mouseLeave(item.name)"><img v-bind:src="item.image"/>
                <div class="card-footer" v-show="item.overlay">
                    <p>{{ item.name }}</p>
                    <p--rating--star>★</p--rating--star>
                    <p--rating>{{ item.rating }}</p--rating>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>

</template>
<script>
export default {
  name: "N2wCarousel",
  template: "#v-carousel",
  data() {
    return {
      currentOffset: 0,
      windowSize: 5,
      paginationFactor: 262,
    
    items: [
        {
        name: "Doctor Who",
        rating: 10,
        image: "https://placehold.it/182x269",
        overlay: false
        },
        {
        name: "The Mandalorian: The las jedi episode",
        rating: 9.8,
        image: "https://placehold.it/182x269",
        overlay: false
        },
        {
        name: "1917",
        rating: 5.4,
        image: "https://placehold.it/182x269",
        overlay: false
        },
        {
        name: "Fight Club",
        rating: 6.2,
        image: "https://placehold.it/182x269",
        overlay: false
        },
        {
        name: "Narcos",
        rating: 7,
        image: "https://placehold.it/182x269",
        overlay: false
        },
        {
        name: "The Office",
        rating: 3.5,
        image: "https://placehold.it/182x269",
        overlay: false
        },
        {
        name: "You",
        rating: 8,
        image: "https://placehold.it/182x269",
        overlay: false
        }
    ]
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  }
};
</script>
<style scoped>
@import '../assets/styles/N2wCarousel.css';
</style>