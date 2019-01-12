
import { storiesOf } from '@storybook/vue';
import Post from '../components/Post.vue';
import content from './content.md';

import {
  withKnobs,
  boolean,
} from "@storybook/addon-knobs";


storiesOf("Post", module)
  .addDecorator(withKnobs)
  .add("Default Post Styles", () => {
    const defaultStyles = boolean('Use Default Styles', false);
    return { components: { Post }, template: `<Post :content="content" :useDefaultStyles="${defaultStyles}" />`, data: () => ({ content: content }) };
});