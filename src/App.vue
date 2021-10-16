<template>
  <LayoutBroker
    :current="$route.meta?.layout"
    :layouts="layouts"
    :layout-classes="$route.meta.layoutClasses"
    logo-alt="Dzango logo"
  >
    <router-view />
  </LayoutBroker>
</template>

<script>
export default {
  name: 'App'
}
</script>
