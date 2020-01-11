<template>
  <div class="c-loading">
    <slot name="icon">
      <font-awesome-icon :icon="['fas', 'spinner']" size="4x" spin />
    </slot>
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
