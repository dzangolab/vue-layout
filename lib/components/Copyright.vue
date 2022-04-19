<template>
  <div class="c-copyright">
    © {{ year }} <a :href="url">{{ holder }}</a>. {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Copyright',

  props: {
    holder: {
      default: 'YOUR AWESOME COMPANY',
      type: [String, Function]
    },
    text: {
      default: 'All rights reserved.',
      type: [String, Function]
    },
    url: {
      default: '/',
      type: [String, Function]
    },
    year: {
      default: () => new Date().getFullYear(),
      type: [Number, Function]
    }
  }
}
</script>

<style scoped>
a, a:active, a:link, a:visited {
  color: inherit;
  text-decoration: none;
}
</style>
