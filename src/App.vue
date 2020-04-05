<template>
  <div id="app">
    <header id="nav">
     <main-nav />
    </header>
    <div class="container">
      <transition
        name="fade"
        mode="out-in"
      >
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import MainNav from './components/navigation/MainNav.vue'
import UserPreferences from './mixins/userPreferences'

export default {
  components: {
    MainNav
  },

  mixins: [UserPreferences],

  created() {
    
  },

  mounted() {
    // We need to register the BrowserBreapoints plugin once the app is mounted
    this.$browserBreakpoints.register(window)
  },

  beforeDestroy() {
    // We need to unregister the BrowserBreapoints plugin before the app is destroyed
    this.$browserBreakpoints.unregister(window)
  }
}
</script>

<style lang="scss">
@import "styles/index.scss";

:root {
    --color-white: #fff;
    --color-black: #000;
    --color-green: #33b353;
    --color-green-light: #b6b7b6;
    --color-green-dark: #2ea24b;
    --color-gray-xlight: #f7f7f7;
    --color-gray-medium: #ccc;
    --color-gray-medium2: #999;
    --color-gray-medium3: #666;
    --color-gray-darker: #333;
    --color-gray-darker2: #a0a0a0;
    --color-border-gray: #6c757d;

    --color-category-billable: #00aa54;
    --color-category-nonbillable: #000;
    --color-category-unscheduled: #cecece;

    --color-graph: #319bbe;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Hack for bar charts to display when collapsed and then expanding */
canvas {
  min-height: 400px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.modal-dialog-scrollable .modal-footer,
.modal-dialog-scrollable .modal-header {
    background-color: rgba(0,0,0,.05);
}

.modal-footer {
    button {
        &.btn-primary {
            background-color: var(--color-green);
            border-color: var(--color-green);
        }
    }
}

.user-list {
    input[type='checkbox'] {
        margin-right: 0.5rem;
        height: 1rem;
    }
}
</style>
