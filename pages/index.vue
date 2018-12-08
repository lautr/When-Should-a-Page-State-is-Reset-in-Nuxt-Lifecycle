<template>
  <h2>index</h2>
</template>

<script>
import Vue from 'vue';
import { routerGuards, vueHooks } from '~/mixins';

const name = 'Root';

export default Vue.extend({
  name,
  mixins: [routerGuards, vueHooks],
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  fetch() {
    console.log(`[INFO] nuxt: ${name} / fetch`);
  },
});
</script>