import Vue from 'vue';

export const guards = Vue.extend({
  beforeRouteEnter(to, from, next) {
    console.log('[INFO] vue-router: beforeRouteEnter', to.params, from.params);
    next(vm => {
      console.log(
        `vue-router: callback passed to next in ${
          vm.$options.name
        } / beforeRouteEnter`
      );
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      `vue-router: ${this.$options.name} / beforeRouteUpdate`,
      to.params,
      from.params
    );
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(
      `vue-router: ${this.$options.name} / beforeRouteLeave`,
      to.params,
      from.params
    );
    next();
  }
});

export const hooks = Vue.extend({
  beforeCreate() {
    console.log(`[INFO] vue: ${this.$options.name} / beforeCreate`);
  },
  created() {
    console.log(`[INFO] vue: ${this.$options.name} / created`);
  },
  beforeMount() {
    console.log(`[INFO] vue: ${this.$options.name} / beforeMount`);
  },
  mounted() {
    console.log(`[INFO] vue: ${this.$options.name} / mounted`);
  },
  beforeUpdate() {
    console.log(`[INFO] vue: ${this.$options.name} / beforeUpdate`);
  },
  updated() {
    console.log(`[INFO] vue: ${this.$options.name} / updated`);
  },
  activated() {
    console.log(`[INFO] vue: ${this.$options.name} / activated`);
  },
  deactivated() {
    console.log(`[INFO] vue: ${this.$options.name} / deactivated`);
  },
  beforeDestroy() {
    console.log(`[INFO] vue: ${this.$options.name} / beforeDestroy`);
  },
  destroyed() {
    console.log(`[INFO] vue: ${this.$options.name} / destroyed`);
  },
  errorCaptured() {
    console.log(`[INFO] vue: ${this.$options.name} / errorCaptured`);
  }
});