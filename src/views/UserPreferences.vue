<template>
  <div class="forecast">
      <div class="row tools mt-5">
          <div class="tools-filters col-sm-12 col-md-4">
            <label for="filter" class="label-field">Preferred currency:</label>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ viewFormat }}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click="setViewFormat('CAD')">CAD</a>
                <a class="dropdown-item" @click="setViewFormat('others')">Others</a>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserPreferences',

  data() {
    return {
      viewFormat: 'CAD'
    }
  },

  computed: {
    ...mapGetters({
      currencies: 'getCurrencies'
    })
  }
}
</script>

<style lang="scss" scoped>

    $mobile-breakpoint: 767px;

    .report-list:nth-child(odd) {
        background-color: var(--color-gray-xlight);
    }

    .comp-chart {
        cursor: pointer;
    }

    .tools-start-date,
    .tools-end-date,
    .tools-filters {
        text-align: left;
    }

    .tools {
        max-width: 65rem;
        display: flex;
        width: 100%;
        padding: 1rem 1rem 1.5rem 1rem;
        border:2px solid var(--color-green);
        min-height: 5rem;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 auto;

        @media screen and (max-width: $mobile-breakpoint) {
            padding-bottom: 2.5rem;
        }
    }

    .label-field {
        display: block;

        @media screen and (max-width: $mobile-breakpoint) {
            margin: 1.3rem 0 0 0;
        }
    }

    .input-start-date {
        input {
            border: 1px solid var(--color-gray-medium3);
        }
    }
</style>
