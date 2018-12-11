# When Should a Page State is Reset in Nuxt Lifecycle?

`left` method is only called, when the component isn't matched with the next routed components.

This is useful to reset the page state instead of `destroyed` hook, if you use Nuxt.js.

(This repo isn't a package. It's just sample code.)

## Flow

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
