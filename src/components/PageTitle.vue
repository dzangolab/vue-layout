<template>
  <div class="page__title">
    <h1 v-if="title">
      {{ title }}
      <slot name="subtitle">
        <small
          v-if="subtitle"
          class="text-muted"
        >{{ subtitle }}</small>
      </slot>
    </h1>
    <slot name="toolbar" />
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
