<script>
import Vue from 'vue';
import { routerGuards, vueHooks } from '~/mixins';

const name = 'RedirectPage';

export default Vue.extend({
  name,
  mixins: [routerGuards, vueHooks],
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  fetch({ redirect }) {
    console.log(`[INFO] nuxt: ${name} / fetch`);
    return redirect('/parents/john');
  },
});
</script>
