# When Should a Page State is Reset in Nuxt Lifecycle?

If you use Vue Router, you might want to use `destroyed` hook.

But you use Nuxt and use `fetch` to fill a page state (Vuex), and if you would like to reset the state when the user leave the page, `destroyed` isn't much working.

With Nuxt, the component is NOT reused even if routing the same component, so `destroyed` is called after a navigation like `users/1` => `users/2`. This means Fetch `users/2` and then Reset the page state which store a new data for `users/2`.

## New Hook

`left` method is only called, when the component isn't matched with the next routed components.

This is useful to reset the page state instead of `destroyed` hook, if using Nuxt.

(This repo isn't a package. It's just sample code.)

## Flow

Here is sample routes.

```
[
  { path: '/',component: Root },
  { path: '/parents/:id?', component: Parent }
]
```

The following chart shows how hooks occur. (Exclude `update`, `beforeUpdate`, `beforeCreate`, `beforeDestroy` and `asyncData` for simplicity)

![4b13f3eb-d842-49f6-9a3d-81ae026a396a](https://user-images.githubusercontent.com/1491961/49784036-4ff55a00-fd5f-11e8-8287-1644cca84336.png)

## Use

```javascript
import Vue from 'vue';
import LeftHook from '~/mixins/left-hook';

export default Vue.extend({
  mixins: [LeftHook],
  async fetch(context) {
    await context.store.dispatch('fetch');
  },
  methods: {
    left() {
      this.$store.dispatch('reset');
    },
  },
});
```
