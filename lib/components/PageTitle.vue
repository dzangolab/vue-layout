<template>
  <div class="page__title">
    <h1 v-if="title">
      {{ title }}
      <slot name="subtitle">
        <small class="page__subtitle" v-if="subtitle">{{ subtitle }}</small>
      </slot>
    </h1>
    <slot name="toolbar"></slot>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',

  props: {
    subtitle: {
      default: false,
      type: [Boolean, Object, String]
    },
    title: {
      default: false,
      type: [Boolean, Object, String]
    }
  }
}
</script>
