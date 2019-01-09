
import { storiesOf } from '@storybook/vue';
import Post from '../components/Post.vue';
import content from './content.md';


storiesOf('Post', module)
  .add('Default Post Styles', () => ({
    components: { Post },
    template: '<Post :content="content" />',
    data: () => ({
      content: content
    })
  }));