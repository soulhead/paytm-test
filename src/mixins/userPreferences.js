export default {
  data() {
    return {
      $userPrefs: () => {}
    }
  },

  methods: {
    $setPref(key, value) {
      this.$set(this.$userPrefs, key, value)
      console.log('new user prefs', this.$userPrefs)
      this.$cookies.set('user', this.$userPrefs)
    }
  },

  created() {
    if(!this.$cookies.get('user')) {
      this.$cookies.set('user', {})
    } else {
      this.$userPrefs = this.$cookies.get('user')
    }
  }
}