<template>
  <router-link to="/">
    <img
      :al="alt"
      :src="url"
    >
  </router-link>
</template>

<script>
export default {
  name: 'Logo',

  props: {
    alt: {
      default: 'LOGO',
      type: [String, Function]
    },
    url: {
      default: require('../assets/logo.png'),
      type: [String, Function]
    }
  }
}
</script>

<style>
img {
  max-width: 150px;
}

@media (min-width: 768px) {
  img {
    max-width: 200px;
  }
}
</style>
