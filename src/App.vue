<template>
  <div id="app">
    <Page
      :loading="true"
      title="@dzangolab/vue-layout"
      subtitle="A vue.js set of components for page layout."
    />
  </div>
</template>

<script>
import Page from './components/Page.vue'

export default {
  components: {
    Page
  },

  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
