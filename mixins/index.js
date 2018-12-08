import Vue from 'vue';

// export const afterRouteLeave = Vue.extend({
//   data() {
//     return {
//       $_afterRouteLeave_unregister: undefined,
//     };
//   },
//   methods: {
//     myAfterRouteLeave() {
//       throw new Error('`myAfterRouteLeave` method should be overridden.');
//     },
//   },
//   beforeRouteLeave(_to, _from, next) {
//     if (!this.$_afterRouteLeave_unregister) {
//       this.$_afterRouteLeave_unregister = this.$router.afterEach(() => {
//         // `afterRouteLeave` is only called, when this component isn't matched with
//         // the next routed components.
//         // This is useful to reset the page state instead of `destroyed` hook, if you use Nuxt.js.
//         this.myAfterRouteLeave();
//         this.$_afterRouteLeave_unregister();
//       });
//     }
//     next();
//   },
// });

export const afterLeaveAndDestroyHook = Vue.extend({
  methods: {
    afterLeaveAndDestroy() {
      throw new Error('`afterLeaveAndDestroy` method should be overridden.');
    },
  },
  destroyed() {
    const isMatched =
      // `destroyed` is called after the navigation is confirmed, so
      // `this.$router.getMatchedComponents` give the new routed components.
      this.$router
        .getMatchedComponents()
        .some(component => this.constructor === component);

    // // The matching with $options.name is also a solution,
    // // but it is difficult to always make the name unique.
    // const isMatched = this.$router
    //   .getMatchedComponents()
    //   .some(
    //     component =>
    //       this.$options.name === (component as any).extendOptions.name
    //   );

    if (!isMatched) {
      // `afterLeaveAndDestroy` method is only called,
      // when the component isn't matched with the next routed components.
      //
      // This is the useful hook to reset the page state instead of `destroyed` hook,
      // if you use Nuxt.js.
      this.afterLeaveAndDestroy();
    }
  },
});

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
