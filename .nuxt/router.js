import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71af7482 = () => interopDefault(import('../pages/verbi.vue' /* webpackChunkName: "pages/verbi" */))
const _7911a26a = () => interopDefault(import('../pages/vocaboli/_vocaboli.vue' /* webpackChunkName: "pages/vocaboli/_vocaboli" */))
const _9b09dbac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/verbi",
    component: _71af7482,
    name: "verbi"
  }, {
    path: "/vocaboli/:vocaboli?",
    component: _7911a26a,
    name: "vocaboli-vocaboli"
  }, {
    path: "/",
    component: _9b09dbac,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
