<template>
  <component :is="currentLayout" :class="layoutClasses">
    <slot name="before-page"></slot>
    <router-view :class="pageWrapperClasses"></router-view>
    <slot name="after-page"></slot>
  </component>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout'

export default {
  name: 'LayoutBroker',

  props: {
    /**
     * Object with layouts components
     */
    layouts: {
      type: Object,
      default: () => {
        return {
          default: DefaultLayout
        }
      }
    },

    /**
     * Current layout component name
     */
    current: {
      type: String,
      default: null
    },

    /**
     * Classes binded to layout root component
     */
    layoutClasses: {
      type: [Object, Array],
      default: () => ['default']
    },

    /**
     * Classes binded to page component
     */
    pageWrapperClasses: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    /**
     * Return layout component name for current route
     * @return {string}
     */
    currentLayout () {
      return this.layouts[this.current] ?? this.layouts.default ?? DefaultLayout
    }
  }
}
</script>
