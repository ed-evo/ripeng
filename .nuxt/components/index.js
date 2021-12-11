import { wrapFunctional } from './utils'

export { default as Definizione } from '../../components/Definizione.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyDefinizione = import('../../components/Definizione.vue' /* webpackChunkName: "components/definizione" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
