# When Should a Page State is Reset in Nuxt Lifecycle?

`afterLeaveAndDestroy` method is only called, when the component isn't matched with the next routed components.

This is useful to reset the page state instead of `destroyed` hook, if you use Nuxt.js.

(This repo isn't a package. It's just sample code.)

## Flow

## Use

```javascript
import Vue from 'vue';
import { afterLeaveAndDestroyHook } from '~/mixins';

export default Vue.extend({
  mixins: [afterLeaveAndDestroyHook],
  async fetch(context) {
    await context.store.dispatch('fetch');
  },
  methods: {
    afterLeaveAndDestroy() {
      this.$store.dispatch('reset');
    },
  },
});
```
