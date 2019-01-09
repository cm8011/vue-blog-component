import { configure, addDecorator } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

addDecorator(withNotes);

import Vue from 'vue';

// Import your custom components.
import Post from '../src/components/Post.vue';


// Register custom components.
Vue.component('post', Post);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);