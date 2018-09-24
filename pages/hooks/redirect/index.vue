<script>
import Vue from 'vue';
import { guards, hooks } from '~/mixins';

const name = 'RedirectPage';

export default Vue.extend({
  name,
  mixins: [guards, hooks],
  asyncData() {
    console.log(`[INFO] nuxt: ${name} / asyncData`);
  },
  fetch({ redirect }) {
    console.log(`[INFO] nuxt: ${name} / fetch`);
    return redirect('/hooks/parents/1');
  }
});
</script>
