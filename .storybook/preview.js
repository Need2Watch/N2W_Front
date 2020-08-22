import { configure, addDecorator } from '@storybook/vue';

import { VApp } from 'vuetify/lib';

import '../src/plugins/vuetify';

addDecorator(() => ({
  components: { VApp },
  template: `
    <v-app>
      <div>
          <story/>
      </div>
    </v-app>
  `,
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
