<template>
  <LayoutBroker
    :current="$route.meta?.layout"
    :layouts="layouts"
    :layoutClasses="$route.meta.layoutClasses"
    logoAlt="Dzango logo"
  >
    <router-view />
  </LayoutBroker>
</template>

<script>
export default {
  name: 'App'
}
</script>
