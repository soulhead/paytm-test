import Plugin from './BrowserBreakpoints'

export default {
  install(Vue, options) { // eslint-disable-line no-unused-vars
    if (options !== null && options !== undefined) {
      if (options.breakpoints !== undefined) Plugin.setBreakpoints(options.breakpoints)
    }

    Vue.prototype.$browserBreakpoints = Plugin
    Vue.prototype.observers = Vue.observable({
      breakpoint: 'small_desktop'
    })

    Vue.prototype.MOBILE = 'mobile'
    Vue.prototype.TABLET = 'tablet'
    Vue.prototype.SMALL_DESKTOP = 'small_desktop'
    Vue.prototype.LARGE_DESKTOP = 'large_desktop'

    Vue.$browserBreakpoints = Plugin

    Vue.use(Plugin)
  }
}
