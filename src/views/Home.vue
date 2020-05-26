<template>
  <div class="moviesDiv">

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">
      Following
    </vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">
      For you
    </vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">
      Popular
    </vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

    <vs-divider position="left-center" color="n2wwhite" class="sectionDivider">
      Top rated
    </vs-divider>
    <n2w-carousel v-bind:items="this.fromBack"></n2w-carousel>

  </div>
</template>
<script>
import N2wCarousel from '../components/N2wCarousel.vue';
export default {
  name: 'Movie',
  props: {},
  components: {
    N2wCarousel
  },
  data() {
    return {
            fromBack: [
  {
    "following": false,
    "genres": [
      "Science Fiction",
      "Drama"
    ],
    "movie_id": 419704,
    "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    "poster_url": "https://image.tmdb.org/t/p/original/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    "rating": 6,
    "title": "Ad Astra",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Family",
      "Animation",
      "Comedy",
      "Mystery",
      "Adventure"
    ],
    "movie_id": 385103,
    "overview": "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",
    "poster_url": "https://image.tmdb.org/t/p/original/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
    "rating": 8.1,
    "title": "Scoob!",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "movie_id": 338762,
    "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    "poster_url": "https://image.tmdb.org/t/p/original/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
    "rating": 7.1,
    "title": "Bloodshot",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Thriller"
    ],
    "movie_id": 686245,
    "overview": "A disgraced doctor and his family are held hostage at their home by criminals on the run, when a robbery-gone-awry requires them to seek immediate medical attention.",
    "poster_url": "https://image.tmdb.org/t/p/original/niyXFhGIk4W2WTcX2Eod8vx2Mfe.jpg",
    "rating": 6.1,
    "title": "Survive the Night",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Comedy",
      "Romance"
    ],
    "movie_id": 576156,
    "overview": "A couple experiences a defining moment in their relationship when they are unintentionally embroiled in a murder mystery. As their journey to clear their names takes them from one extreme – and hilarious - circumstance to the next, they must figure out how they, and their relationship, can survive the night.",
    "poster_url": "https://image.tmdb.org/t/p/original/5jdLnvALCpK1NkeQU1z4YvOe2dZ.jpg",
    "rating": 6.4,
    "title": "The Lovebirds",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "War",
      "Drama",
      "Action",
      "Thriller",
      "History"
    ],
    "movie_id": 530915,
    "overview": "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
    "poster_url": "https://image.tmdb.org/t/p/original/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    "rating": 7.9,
    "title": "1917",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Science Fiction",
      "Comedy",
      "Family"
    ],
    "movie_id": 454626,
    "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
    "poster_url": "https://image.tmdb.org/t/p/original/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    "rating": 7.5,
    "title": "Sonic the Hedgehog",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "movie_id": 475557,
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_url": "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "rating": 8.2,
    "title": "Joker",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Crime",
      "Comedy"
    ],
    "movie_id": 495764,
    "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
    "poster_url": "https://image.tmdb.org/t/p/original/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
    "rating": 7.2,
    "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Thriller",
      "Action",
      "Crime"
    ],
    "movie_id": 38700,
    "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    "poster_url": "https://image.tmdb.org/t/p/original/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
    "rating": 7.2,
    "title": "Bad Boys for Life",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "movie_id": 920,
    "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    "poster_url": "https://image.tmdb.org/t/p/original/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
    "rating": 6.8,
    "title": "Cars",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Comedy",
      "Thriller",
      "Drama"
    ],
    "movie_id": 496243,
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "poster_url": "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "rating": 8.5,
    "title": "Parasite",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Drama",
      "Action",
      "Thriller"
    ],
    "movie_id": 545609,
    "overview": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…",
    "poster_url": "https://image.tmdb.org/t/p/original/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
    "rating": 7.5,
    "title": "Extraction",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Animation",
      "Family",
      "Adventure"
    ],
    "movie_id": 330457,
    "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    "poster_url": "https://image.tmdb.org/t/p/original/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    "rating": 7.2,
    "title": "Frozen II",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Animation",
      "Action",
      "Adventure",
      "Fantasy",
      "Science Fiction"
    ],
    "movie_id": 618344,
    "overview": "Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
    "poster_url": "https://image.tmdb.org/t/p/original/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
    "rating": 8.5,
    "title": "Justice League Dark: Apokolips War",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "movie_id": 181812,
    "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
    "poster_url": "https://image.tmdb.org/t/p/original/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    "rating": 6.5,
    "title": "Star Wars: The Rise of Skywalker",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Comedy",
      "Romance"
    ],
    "movie_id": 582596,
    "overview": "A guy meets the woman of his dreams and invites her to his company's corporate retreat, but realizes he sent the invite to the wrong person.",
    "poster_url": "https://image.tmdb.org/t/p/original/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg",
    "rating": 6.1,
    "title": "The Wrong Missy",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "movie_id": 27205,
    "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    "poster_url": "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "rating": 8.3,
    "title": "Inception",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Animation",
      "Family",
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "movie_id": 508439,
    "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    "poster_url": "https://image.tmdb.org/t/p/original/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    "rating": 7.9,
    "title": "Onward",
    "watched": false
  },
  {
    "following": false,
    "genres": [
      "Adventure",
      "Fantasy",
      "Romance",
      "Comedy",
      "Family"
    ],
    "movie_id": 420817,
    "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    "poster_url": "https://image.tmdb.org/t/p/original/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    "rating": 7.1,
    "title": "Aladdin",
    "watched": false
  }
],
    };
  },
};
</script>
<style scoped>
@import '../assets/styles/Home.css';
</style>
