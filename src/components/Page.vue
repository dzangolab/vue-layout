<template>
  <div class="page">
    <PageTitle
      v-if="title !== false"
      :subtitle="subtitle"
      :title="title"
    >
      <template #subtitle>
        <slot name="subtitle" />
      </template>

      <template #toolbar>
        <slot name="toolbar" />
      </template>
    </PageTitle>

    <Loading
      v-show="loading"
      class="page__loading"
    />
    <div
      v-show="!loading"
      :class="'page__content' + (contentClass ? ' ' + contentClass : '')"
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

  name: 'Page',
  components: {
    Loading,
    PageTitle
  },

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
