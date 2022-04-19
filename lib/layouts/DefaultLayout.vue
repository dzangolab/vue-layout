<template>
  <div class="l-default">
    <slot name="header">
      <Header
        :logoAlt="logoAlt"
        :logoUrl="logoUrl"
      />
    </slot>
    <main>
      <slot />
    </main>
    <slot name="footer">
      <Footer
        :copyrightHolder="copyrightHolder"
        :copyrightText="copyrightText"
        :copyrightyear="copyrightYear"
        :version="version"
      />
    </slot>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Header
  },

  props: {
    copyrightHolder: {
      type: [String, Function]
    },
    copyrightText: {
      type: [String, Function]
    },
    copyrightUrl: {
      type: [String, Function]
    },
    copyrightYear: {
      type: [Number, Function]
    },
    logoAlt: {
      type: [String, Function]
    },
    logoUrl: {
      type: [String, Function]
    },
    version: {
      type: [String, Function]
    },
    versionText: {
      type: [String, Function]
    }
  }
}
</script>

<style lang="css">
html, body, #app {
  height: 100%;
  width: 100%;
}

main {
  padding: 1rem;
}

@media (min-width: 768px) {
  main {
    padding: 1rem 2rem;
  }
}
</style>

<style lang="css" scoped>
.l-default {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
}

main {
  flex: 1;
  width: 100%;
}
</style>
