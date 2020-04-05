import { merge as _merge } from 'lodash'
import Vue from 'vue'

export default {
  store: null,
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMALL_DESKTOP: 'small_desktop',
  LARGE_DESKTOP: 'large_desktop',
  breakpoints: {
    tablet: 764,
    small_desktop: 980,
    large_desktop: 1304
  },
  getCurrentBreakpoint() {
    if (typeof window === 'undefined') return this.LARGE_DESKTOP

    const windowWidth = window.innerWidth

    if (windowWidth < this.breakpoints.tablet) return this.MOBILE
    if (windowWidth >= this.breakpoints.large_desktop) return this.LARGE_DESKTOP
    if ((windowWidth >= this.breakpoints.tablet)
      && (windowWidth < this.breakpoints.small_desktop)) return this.TABLET
    return this.SMALL_DESKTOP
  },
  setCurrentBreakpoint(event) {
    const scope = (event !== undefined) ? event.target.__browserBreapoints : this
    Vue.set(Vue.prototype.observers, 'breakpoint', scope.getCurrentBreakpoint())
  },
  setBreakpoints(breakpoints) {
    _merge(this.breakpoints, breakpoints)
  },

  // This method needs to be called by the Vue instance during the mounted lifecycle hook
  // @param target: window instance
  register(target) {
    if (target === undefined) return

    target.addEventListener('resize', this.setCurrentBreakpoint, { passive: true })
    target.__browserBreapoints = this
    this.setCurrentBreakpoint()
  },

  // This method needs to be called by the Vue instance during the destroy lifecycle hook
  // @param target: window instance
  unregister(target) {
    target.removeEventListener('resize', this.setCurrentBreakpoint, { passive: true })
  }
}
