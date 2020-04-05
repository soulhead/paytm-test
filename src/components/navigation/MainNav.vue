<template>
  <div id="main-nav" class="navbar navbar-expand">
      <div class="container navbar-wrapper">
          <!-- <div class="navbar-logo mr-3">
              <img src="@/assets/logo_nurun_white.svg" alt="Nurun">
          </div> -->

          <ul class="nav">
              <li class="nav-item"><router-link to="/" class="nav-link" :class="activeClass('home')">Expense Report</router-link></li>
              <li class="nav-item"><router-link to="/user" class="nav-link" :class="activeClass('teams')">User Preferences</router-link></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "mainNav",
  methods: {
    activeClass(...names) {
      for (let name of names) {
          if (name == this.$route.name)
              return 'active'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

    $mobile-breakpoint: 767px;
    $desktop-breakpoint: 1200px;

    #main-nav {
        background-color: var(--color-green);

        a {
            font-weight: bold;
            color: var(--color-white);
            width: 100%;
            text-decoration: none;
            text-align: left;
            position: relative;

            &:active,
            &.router-link-exact-active {
                color: var(--color-gray-darker);
                background-color: var(--color-white);

                &:hover {
                    outline: 0;
                    color: var(--color-gray-darker);

                    &:before {
                        opacity: 1;
                        width: 2rem;
                        background: var(--color-gray-darker);
                    }
                }
            }

            &:before {
                content: '';
                width: 0;
                height: 3px;
                position: absolute;
                bottom: 1rem;
                left: 1.2rem;
                opacity: 0;
                transition: width .3s cubic-bezier(0,.5,.3,1) 0s,opacity .3s cubic-bezier(0,.5,.3,1) 0s,background .3s cubic-bezier(0,.5,.3,1) 0s;

                @media screen and (min-width: $mobile-breakpoint) {
                    bottom: 1.5rem;
                    left: 2rem;
                }
            }

            &:hover {
                outline: 0;
                color: var(--color-white);

                &:before {
                    opacity: 1;
                    width: 2rem;
                    background: var(--color-white);
                }
            }
        }
    }

    .navbar-wrapper {
        justify-content: flex-start;
    }

    .navbar-logo {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0;

        @media screen and (min-width: $desktop-breakpoint) {
            margin: 0 2rem 0 1.5rem;
        }
    }

    .nav-link {
        padding: 1.5rem 1.2rem;

        @media screen and (min-width: $mobile-breakpoint) {
             padding: 2rem;
        }
    }

    .navbar {
        padding: 0;

        >.container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            justify-content: flex-start;
        }
    }

    .nav-item {
        margin-top: 0;
        background-color: var(--color-green);
    }
</style>