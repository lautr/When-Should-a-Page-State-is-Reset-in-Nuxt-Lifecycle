import Vue from 'vue';
export default Vue.extend({
  methods: {
    left() {
      throw new Error('`left` method should be overridden.');
    },
  },
  destroyed() {
    if (!this.$router) {
      this.left();
      return;
    }

    const isMatched = this.$router
      .getMatchedComponents()
      .some(component => this.constructor === component);

    if (!isMatched) {
      console.log(
        `[INFO] LeftHook: ${this.$options.name} (uid: ${this._uid} / left`
      );

      // `left` method is only called, when the component isn't matched with the next routed components.
      // This is the useful hook to reset the page state instead of `destroyed` hook, if you use Nuxt.js.
      // https://github.com/kouzoh/partner-dashboard/pull/424
      this.left();
    }
  },
});
