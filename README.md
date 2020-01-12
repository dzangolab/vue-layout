@dzangolab/vue-layout
=====================

Requirements
------------


Installation
------------

```
npm add --s @dzangolab/vue-layout
```

```
yarn add @dzangolab/vue-layout
```


Usage (Global)
--------------

In your app's `main.js`:

```
import {Page} from '@dzangolab/vue-layout'

...

Vue.component('Page', Page)
```


Usage (in component)
--------------------

```
<template>
  <Page
    :loading="loading"
    contentClass="contentClass"
    title="Page title"
  >
    <template v-slot:toolbar>
      <Toolbar />
    </template>

    <template v-slot:content>
      <MyComponent ... />
    </template>

    <template #notifications>
      <notifications></notifications>
    </template>
  </Page>
</template>

<script>
import {Page} from '@dzangolab/vue-layout'

export default {
  components: {
    Page
  },

  data () {
    return {
      loading: false
    }
  }
}
</script>
```

## Props

### `contentClass`

A css class set on the `page__content` part of the page, ie the wrapper element around the `content` slot.

### `loading`

A flag indicating whether the page is in loading status or not. If set to true, the `content` slot of the page will not be shown. Instead, the `Loading` component will be shown.

### `subtitle`

Text to be shown as the page's sub-title. This is rendered by default as the content of a `<small>` tag set as a child of the title `H1` tag.

### `title`

Text to be displayed as the page's title. This is rendered as the content of an H1 tag.

## Slots

### `content`

The `content` slot is intended to hold the main content of the page.

### `subtitle`

Used to render the page's sub-title.

### `toolbar`

Used to inject a toolbar in the page title area.

## Loading component

The package includes a `Loading` component. This is displayed by the page component when its `loading` prop is set to `true`. The `Loading` component can be used independently inside any component.

```
<script>
import {Loading} from '@dzangolab/vue-layout'

export default {
  components: {
    Loading
  }
}
</script>
```
