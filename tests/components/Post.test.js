import Post from '../../src/components/Post.vue'
import content from '../../src/stories/content.js'
import { shallowMount } from '@vue/test-utils'

describe('Post', () => {
  it('Renders Correctly', async () => {

    const wrapper = shallowMount(Post, {
      propsData: { content }
    })

    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(subTitle);
    expect(wrapper.text()).toContain(firstParagraph);
    expect(wrapper.text()).toContain(imgCaption);
    expect(wrapper.text()).toContain(secondHeading);
    expect(wrapper.text()).toContain(authorText);
    expect(wrapper.text()).toContain(signOff);
    expect(wrapper.text()).toContain(quote);
  })
})

const title = "This is the Blog Title";
const subTitle = "This is the subtitle";
const firstParagraph =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const imgCaption = "Image caption here";
const secondHeading = "This is a Heading Level 2";
const quote =
  "I disapprove of what you say, but will defend to the death your right to say it.";
const authorText = "Written by Jessica Smith";
const signOff =
  "Posted on Dec 23, 2018 | See more stories by Jessica on Medium";
