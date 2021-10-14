<template>
  <footer>
    <slot name="copyright">
      <Copyright
        :holder="copyrightHolder"
        :text="copyrightText"
        :url="copyrightUrl"
        :year="copyrightYear"
      />
    </slot>
    <slot />
    <slot name="version">
      <div class="c-footer__version">{{ versionText}}&nbsp;{{ version }}</div>
    </slot>
  </footer>
</template>

<script>
import Copyright from './Copyright'

export default {
  name: 'Footer',

  components: {
    Copyright
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
    version: {
      default: '0.1.0',
      type: [String, Function]
    },
    versionText: {
      default: 'version',
      type: [String, Function]
    }
  }
}
</script>

<style scoped>
footer {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  justify-content: flex-start;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

@media (min-width: 768px) {
  footer {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
    text-align: left;
  }
}
</style>
