<template>
  <div>
    <v-toolbar color="transparent" app>
      <v-toolbar-items>
        <a
          href="https://need2watch.com"
          aria-label="Need2Watch Home Page"
          title="Need2Watch Home Page"
          class="d-sm-flex align-center"
          style="width:4%"
        >
          <v-img
            class="v-responsive v-image shrink"
            aria-label="Need2WatchLogo"
            src="../assets/logo.png"
            width="80%"
            to="https://stackoverflow.com/questions/55779555/vuetify-create-image-that-links-to-another-page"
          ></v-img>
        </a>
        <v-btn color="transparent" flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-card-text>
          <v-autocomplete
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="API"
            placeholder="Search for a movie..."
            append-icon="mdi-magnify"
            return-object
          ></v-autocomplete>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-avatar color="#fbc500" style="margin-top:0.5%">
          <v-icon color="black">mdi-calendar</v-icon>
        </v-avatar>
        <v-card color="transparent" style="padding-top: 0.5%">
          <v-list-item href="https://need2watch.com">
            <v-avatar color="grey" size="50" style="margin-right:10px">
              <v-img src="../assets/logo.png"></v-img>
            </v-avatar>
            <v-list-item-title class="headline">Francis Molina</v-list-item-title>
          </v-list-item>
        </v-card>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "N2wNavBar",
  data() {
    return {
      menuItems: [
        { title: "Movies", path: "/home", icon: "mdi-movie" },
        { title: "TV Series", path: "/", icon: "mdi-television-classic" },
        { title: "Top Rated", path: "/", icon: "mdi-star-outline" },
        { title: "Contact Us", path: "/", icon: "mdi-email-outline" }
      ]
    };
  }
};
</script>