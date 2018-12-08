<template>
  <div>
    <h2>🐔/{{ $route.params.id }}</h2>
    <p>path: {{ $route.path }}</p>
    <div>
      {{ counter }}
      <button @click="onIncrement">Increment</button>
    </div>
    <div style="background-color: #eea; border-radius: 8px;">
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { routerGuards, vueHooks, afterLeaveAndDestroyHook } from '~/mixins';

const name = 'IdPage';

export default Vue.extend({
  name,
  mixins: [routerGuards, vueHooks, afterLeaveAndDestroyHook],
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  async fetch(context) {
    console.log(`[INFO] nuxt: ${name} / fetch`);
    await context.store.dispatch('parent/fetch');
  },
  methods: {
    afterLeaveAndDestroy() {
      this.$store.dispatch('parent/reset');
    },
    onIncrement() {
      this.$store.dispatch('parent/increment');
    },
  },
  computed: {
    counter() {
      return this.$store.state.parent.counter;
    },
  },
});
</script>
