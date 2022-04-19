<template>
  <header>
    <slot name="logo">
      <Logo
        :alt="logoAlt"
        :url="logoUrl"
      />
    </slot>

    <slot name="userMenu">
      <UserMenu />
    </slot>
  </header>
</template>

<script>
import Logo from './Logo'
import UserMenu from './UserMenu'

export default {
  name: 'Header',

  components: {
    Logo,
    UserMenu
  },

  props: {
    logoAlt: {
      type: [String, Function]
    },
    logoUrl: {
      type: [String, Function]
    }
  }
}
</script>
