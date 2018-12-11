import Vue from 'vue';

export const routerGuards = Vue.extend({
  beforeRouteEnter(to, from, next) {
    console.log(
      '[INFO] vue-router: / beforeRouteEnter',
      to.params,
      from.params
    );
    next(vm => {
      console.log(
        `[INFO] vue-router: ${
          vm.$options.name
        } / callback passed to next in beforeRouteEnter`
      );
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      `[INFO] vue-router: ${this.$options.name} (uid: ${
        this._uid
      }) / beforeRouteUpdate`,
      to.params,
      from.params
    );
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(
      `[INFO] vue-router: ${this.$options.name} (uid: ${
        this._uid
      }) / beforeRouteLeave`,
      to.params,
      from.params
    );
    next();
  },
});

export const vueHooks = Vue.extend({
  beforeCreate() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / beforeCreate`
    );
  },
  created() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / created`
    );
  },
  beforeMount() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / beforeMount`
    );
  },
  mounted() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / mounted`
    );
  },
  beforeUpdate() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / beforeUpdate`
    );
  },
  updated() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / updated`
    );
  },
  activated() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / activated`
    );
  },
  deactivated() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / deactivated`
    );
  },
  beforeDestroy() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / beforeDestroy`
    );
  },
  destroyed() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / destroyed`
    );
  },
  errorCaptured() {
    console.log(
      `[INFO] vue: ${this.$options.name} (uid: ${this._uid}) / errorCaptured`
    );
  },
});
