<template>
  <div class="page">
    <PageTitle
      :subtitle="subtitle"
      :title="title"
      v-if="title !== false"
    >
      <template #subtitle>
        <slot name="subtitle" />
      </template>

      <template #toolbar>
        <slot name="toolbar" />
      </template>
    </PageTitle>
    <div
      :class="'page__content' + (contentClass ? ' ' + contentClass : '')"
    >
      <slot name="default" />
    </div>
  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import './assets/page.scss'

export default {
  components: {
    PageTitle
  },

  name: 'Page',

  props: {
    contentClass: {
      default: '',
      type: String
    },
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
