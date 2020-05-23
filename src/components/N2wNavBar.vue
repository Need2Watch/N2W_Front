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
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-toolbar color="transparent" dark fixed app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items>
        <div class="hidden-md-and-down d-md-flex align-center n2w-logo-div">
          <a
            href="https://need2watch.com"
            aria-label="Need2Watch Home Page"
            title="Need2Watch Home Page"
            class="a-logo"
          >
            <v-img
              aria-label="Need2WatchLogo"
              src="../assets/img/logo.png"
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
        <v-card-text>
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
        <a href="/" class="decoration-none d-md-flex align-center hidden-md-and-down">
          <v-icon transparent size="40">mdi-calendar</v-icon>
        </a>
        <v-card flat class="transparent d-md-flex align-center hidden-md-and-down">
          <v-list-item href="/">
            <v-avatar size="50" class="nav-bar-avatar">
              <v-img src="../assets/img/avatar.jpg"></v-img>
            </v-avatar>
            <v-list-item-title class="headline">Francis Molina</v-list-item-title>
          </v-list-item>
          <v-menu bottom left offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i" @click="_">
                <a :href="item.path" class="decoration-none a-white">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </a>
              </v-list-item>
            </v-list>
          </v-menu>
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
        { title: "Movies", path: "https://www.twitter.com", icon: "mdi-movie" },
        { title: "TV Series", path: "/", icon: "mdi-television-classic" },
        { title: "Top Rated", path: "/", icon: "mdi-star-outline" },
        { title: "Contact Us", path: "/", icon: "mdi-email-outline" }
      ],
      items: [
        { title: "Edit Profile", path: "/" },
        { title: "Log Out", path: "/" }
      ]
    };
  }
};
</script>
<style scoped>
@import "../assets/styles/N2wNavBar.css";
</style>