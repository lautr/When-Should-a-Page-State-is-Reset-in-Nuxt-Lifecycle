<template>
  <div>
    <h1>Hooks</h1>
    <p>コンソール上で、vue, vue-router, nuxt の各種フックが実行されるタイミングと、各ページのステートが更新されるタイミングを確認できます。</p>
    <ul>
      <li><nuxt-link to="/hooks/parents/1">/hooks/parents/1</nuxt-link></li>
      <li><nuxt-link to="/hooks/parents/2">/hooks/parents/2</nuxt-link></li>
      <li><nuxt-link to="/hooks/parents/1/child">/hooks/parents/1/child</nuxt-link></li>
      <li><nuxt-link to="/hooks/parents/2/child">/hooks/parents/2/child</nuxt-link></li>
      <li><nuxt-link to="/hooks/parents/2/child?q=query">/hooks/parents/2/child?q=query</nuxt-link></li>    
      <li><nuxt-link to="/hooks/abort">/hooks/abort</nuxt-link></li>
      <ul>
        <li><small>AbortPage#beforeRouteEnter => next(false)</small></li>
      </ul>
      <li><nuxt-link to="/hooks/redirect">/hooks/redirect</nuxt-link></li>
      <ul>
        <li><small>RedirectPage#fetch => redirect('/hooks/parents/1')</small></li>
      </ul>
    </ul>
    <hr>
    <h1>🐔</h1>
    <p>$route.params.id: {{ $route.params.id }}</p>
    <p v-if="date">date: {{ date }}</p>
    <p v-else><span style="color: red;">date is undefined</span></p>
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue';
import { guards, hooks } from '~/mixins';

const name = 'IdPage';

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
      console.log("update 🐔's state");
      setTimeout(() => resolve({ date: new Date() }), 1000);
    });
  },
  fetch() {
    console.log(`[INFO] nuxt: ${name} / fetch`);
  },
  beforeRouteLeave(_to, _from, next) {
    console.log("destroy 🐔's state");
    this.date = undefined;
    next();
  }
});
</script>
