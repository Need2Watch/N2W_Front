module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
    'index': {
      // entry for the page
      entry: './src/pages/landingPage/main.js',
      // the source template
      template: 'public/index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Landing Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'mainPage': {
      entry: './src/pages/mainPage/main.js',
      template: 'public/index.html',
      title: 'Main Page',
      chunks: ['chunk-vendors', 'chunk-common', 'mainPage']
    },
    'logInPage': {
      entry: './src/pages/logInPage/main.js',
      template: 'public/index.html',
      title: 'Log In Page',
      chunks: ['chunk-vendors', 'chunk-common', 'logInPage']
    },
    'registerPage': {
      entry: './src/pages/registerPage/main.js',
      template: 'public/index.html',
      title: 'Register Page',
      chunks: ['chunk-vendors', 'chunk-common', 'registerPage']
    },
    'searchPage': {
      entry: './src/pages/searchPage/main.js',
      template: 'public/index.html',
      title: 'Search Page',
      chunks: ['chunk-vendors', 'chunk-common', 'searchPage']
    },
    'filmPage': {
      entry: './src/pages/filmPage/main.js',
      template: 'public/index.html',
      title: 'Film Page',
      chunks: ['chunk-vendors', 'chunk-common', 'filmPage']
    },
    'calendarPage': {
      entry: './src/pages/calendarPage/main.js',
      template: 'public/index.html',
      title: 'Calendar Page',
      chunks: ['chunk-vendors', 'chunk-common', 'calendarPage']
    },
    'publicProfilePage': {
      entry: './src/pages/publicProfilePage/main.js',
      template: 'public/index.html',
      title: 'Public Profile Page',
      chunks: ['chunk-vendors', 'chunk-common', 'publicProfilePage']
    },
    'profileSettingPage': {
      entry: './src/pages/profileSettingPage/main.js',
      template: 'public/index.html',
      title: 'Profile Setting Page',
      chunks: ['chunk-vendors', 'chunk-common', 'profileSettingPage']
    },
    'contactUsPage': {
      entry: './src/pages/contactUsPage/main.js',
      template: 'public/index.html',
      title: 'Contact Us Page',
      chunks: ['chunk-vendors', 'chunk-common', 'contactUsPage']
    },
    'contactSuccessPage': {
      entry: './src/pages/contactSuccessPage/main.js',
      template: 'public/index.html',
      title: 'Contact Success Page',
      chunks: ['chunk-vendors', 'chunk-common', 'contactSuccessPage']
    }
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
  }
}

