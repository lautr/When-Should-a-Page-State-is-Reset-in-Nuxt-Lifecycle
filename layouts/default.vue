<template>
  <div>
    <h1>When Should a Page State is Reset in Nuxt Lifecycle?</h1>
    <ul>
      <li>
        <nuxt-link to="/">/</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/parents/john">/parents/john</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/parents/bob">/parents/bob</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/parents/john/child">/parents/john/child</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/parents/bob/child">/parents/bob/child</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/parents/bob/child?q=query">/parents/bob/child?q=query</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/abort">/abort</nuxt-link>
      </li>
      <ul>
        <li>
          <small>AbortPage#beforeRouteEnter => next(false)</small>
        </li>
      </ul>
      <li>
        <nuxt-link to="/redirect">/redirect</nuxt-link>
      </li>
      <ul>
        <li>
          <small>RedirectPage#fetch => redirect('/parents/john')</small>
        </li>
      </ul>
    </ul>
    <nuxt/>
    <div style="color: #999">
      <div>
        <i>$store.state</i>
      </div>
      <div>
        <i>{{$store.state}}</i>
      </div>
      <div>
        <i>$router.options.routes</i>
      </div>
      <div v-for="(route, index) in $router.options.routes" :key="index">
        <i>{{ route }}</i>
      </div>
    </div>
  </div>
</template>