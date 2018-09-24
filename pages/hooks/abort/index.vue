<script>
import Vue from 'vue';

const name = 'AbortPage';

export default Vue.extend({
  name,
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  fetch() {
    console.log(`[INFO] nuxt: ${name} / fetch`);
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      'vue-router: beforeRouteEnter',
      to.params,
      from.params,
      '/ abort the current navigation'
    );

    // abort
    next(false);
  }
});
</script>
