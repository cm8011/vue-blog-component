<template>
  <div v-html="content" :class="{ 'default-style': useDefaultStyles }" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    useDefaultStyles: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style>
.default-style a {
  color: #6d6d6d;
}

.default-style blockquote {
  border-left: 2px solid #ebebeb;
  color: #6d6d6d;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: italic;
  line-height: 24px;
  margin: 0;
  padding: 1rem 0 1rem 1rem;
  text-align: justify;
}

.default-style figcaption {
  color: #6d6d6d;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: italic;
  margin-top: .5rem;
  text-align: center;
}

.default-style h1 {
  color: #373737;
  font-size: 48px;
  font-family: 'Playfair Display', sans-serif;
  font-weight: normal;
  margin: 0 0 1rem 0;
  padding: 1rem 1rem 0 1rem;
  text-align: center;
  text-transform: uppercase;
}

.default-style h2 {
  color: #373737;
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
}

.default-style h3 {
  color: #373737;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: bold;
}

.default-style img {
  display: block;
  margin: 0 auto;
}

.default-style p {
  color: #6d6d6d;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
}

.default-style .blog-body {
  background-color: #f9f9f9;
  padding: 1rem;
}

.default-style .blog-signature {
  align-items: center;
  border-top: 1px solid #ebebeb;
  color: #6d6d6d;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  justify-content: space-between;
  margin-top: 5rem;
  padding-top: 1rem;
}

.default-style .blog-signature img {
  border-radius: 6rem;
  height: 3rem;
  margin: 0 1rem 0 0;
  width: 3rem;
}

.default-style .blog-signature > div:first-child {
  align-items: center;
  display: flex;
  justify-content: flex-start;
}

.default-style .blog-signature > i {
  font-size: 24px;
}

.default-style .subtitle {
  color: #6d6d6d;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}

</style>
