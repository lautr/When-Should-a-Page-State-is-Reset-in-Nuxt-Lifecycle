<script>
import Vue from 'vue';
import { routerGuards, vueHooks } from '~/mixins';

const name = 'AbortPage';

export default Vue.extend({
  name,
  mixins: [routerGuards, vueHooks],
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  fetch() {
    console.log(`[INFO] nuxt: ${name} / fetch`);
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      `[INFO] vue-router: ${name} / beforeRouteEnter (will abort the current navigation)`
    );
    // abort
    next(false);
  },
});
</script>
