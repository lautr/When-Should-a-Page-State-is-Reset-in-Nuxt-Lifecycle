<template>
  <div>
    <h2>🐥</h2>
    <p>path: {{ $route.path }}</p>
    <div>
      {{ counter }}
      <button @click="onIncrement">Increment</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { routerGuards, vueHooks } from '~/mixins';
import LeftHook from '~/mixins/left-hook';

const name = 'ChildPage';

export default Vue.extend({
  name,
  mixins: [routerGuards, vueHooks, LeftHook],
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  async fetch(context) {
    console.log(`[INFO] nuxt: ${name} / fetch`);
    await context.store.dispatch('child/fetch');
  },
  methods: {
    left() {
      this.$store.dispatch('child/reset');
    },
    onIncrement() {
      this.$store.dispatch('child/increment');
    },
  },
  computed: {
    counter() {
      return this.$store.state.child.counter;
    },
  },
});
</script>
