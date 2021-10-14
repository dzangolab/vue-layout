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


Usin the LayoutBroker
--------------

In your app's `main.js`:

```
import layout from '@dzangolab/vue-layout'

...

Vue.use(layout)
```

In your app's `App.vue` component:

```
<template>
  <LayoutBroker>
    <router-view />
  </LayoutBroker>
</template>

<script>
...
</script>
```

Using the Page component
--------------------

Inside any of your components that represents a page:

```
<template>
  <Page
    contentClass="contentClass"
    subtitle="subtitle"
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
export default {
  name: '...'
}
</script>
```

## Page component props

### `contentClass`

A css class set on the `page__content` part of the page, ie the wrapper element around the `content` slot.

### `subtitle`

Text to be shown as the page's sub-title. This is rendered by default as the content of a `<small>` tag set as a child of the title `H1` tag.

### `title`

Text to be displayed as the page's title. This is rendered as the content of an H1 tag.

## Page component slots

### `content`

The `content` slot is intended to hold the main content of the page.

### `subtitle`

Used to render the page's sub-title.

### `toolbar`

Used to inject a toolbar in the page title area.
