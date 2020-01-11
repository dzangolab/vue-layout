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

    <slot name="notifications" class="page__notifications" />

    <Loading class="page__loading" v-if="loading" />
    <div
      :class="'page__content' + (contentClass ? ' ' + contentClass : '')"
      v-else
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
import PageTitle from './PageTitle'

import '@/assets/scss/page.scss'

export default {
  components: {
    Loading,
    PageTitle
  },

  name: 'Page',

  props: {
    contentClass: {
      default: '',
      type: String
    },
    loading: {
      default: false,
      type: [Boolean, Object]
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
