<template>
  <div class="page__loading">
    <font-awesome-icon :icon="['fas', 'spinner']" size="4x" spin />
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

export default {
  name: 'Loading'
}
</script>
