<template>
  <div>
    <h2>🐥</h2>
    <p>$route.query.q: {{ $route.query.q }}</p>
    <p v-if="date">date: {{ date }}</p>
    <p v-else><span style="color: red;">date is undefined</span></p>
  </div>
</template>

<script>
import Vue from 'vue';
import { guards, hooks } from '~/mixins';

const name = 'ChildPage';

export default Vue.extend({
  name,
  mixins: [guards, hooks],
  data() {
    return {
      date: undefined
    };
  },
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
    return new Promise(resolve => {
      console.log("update 🐥's state");
      setTimeout(() => resolve({ date: new Date() }), 1000);
    });
  },
  fetch() {
    console.log(`[INFO] nuxt: ${name} / fetch`);
  },
  beforeRouteLeave(_to, _from, next) {
    console.log("destroy 🐥's state");
    this.date = undefined;
    next();
  }
});
</script>
