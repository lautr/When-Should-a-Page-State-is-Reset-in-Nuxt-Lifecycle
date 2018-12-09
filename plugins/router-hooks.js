export default ({ app }) => {
  app.router.beforeEach(
    (to, from, next) =>
      console.log('[INFO] vue-router: (global) / beforeEach', to, from) ||
      next()
  );
  app.router.afterEach((to, from) =>
    console.log('[INFO] vue-router: (global) / afterEach', to, from)
  );
};
