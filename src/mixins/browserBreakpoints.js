
export default {
  data() {
    return {
      MOBILE: 'mobile',
      TABLET: 'tablet',
      SMALL_DESKTOP: 'small_desktop',
      LARGE_DESKTOP: 'large_desktop'
    }
  },
  computed: {
    breakpointIsNotMobileOrTablet() {
      return !(this.$breakpoint === this.MOBILE || this.$breakpoint === this.TABLET)
    },
    $breakpoint() {
      return this.observers.breakpoint
    }
  }
}
