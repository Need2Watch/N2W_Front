<template>
  <div>
    <v-navigation-drawer color="transparent" disable-resize-watcher v-model="sidebar" app>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="transparent" dark fixed app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items>
        <div
          class="hidden-md-and-down d-md-flex align-center"
          style="max-width: 4%; margin-right: 10px"
        >
          <a
            href="https://need2watch.com"
            aria-label="Need2Watch Home Page"
            title="Need2Watch Home Page"
            style="width:100%"
          >
            <v-img
              aria-label="Need2WatchLogo"
              src="../assets/logo.png"
              to="https://stackoverflow.com/questions/55779555/vuetify-create-image-that-links-to-another-page"
            ></v-img>
          </a>
        </div>
        <v-btn
          class="hidden-sm-and-down"
          color="transparent"
          depressed
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <span class="hidden-md-and-down">{{ item.title}}</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-card-text class="hidden-sm-and-down">
          <v-autocomplete
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="API"
            placeholder="Search movie..."
            append-icon="mdi-magnify"
            return-object
          ></v-autocomplete>
        </v-card-text>
        <a
          href="https://need2watch.com"
          style="text-decoration:none"
          class="d-sm-flex align-center"
        >
          <v-avatar color="#fbc500" style="margin-top:0.5%">
            <v-icon color="black">mdi-calendar</v-icon>
          </v-avatar>
        </a>
        <v-card class="transparent d-sm-flex align-center">
          <v-list-item href="https://need2watch.com">
            <v-avatar size="50" style="margin-right:10px">
              <v-img src="../assets/avatar.jpg"></v-img>
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
      sidebar: false,
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