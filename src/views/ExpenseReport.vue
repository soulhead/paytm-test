<template>
  <div class="teams mt-5 d-flex">
    <div class="alert alert-info row" v-show="loading">Loading...</div>
      <div class="row tools mt-2 mb-5">
        Report total:  {{ reportTotalAmount }}
    </div>
    <div v-show="!loading" class="row">
        <add-receipt-card @teamCreated="onTeamCreated" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// import { EventBus } from '../utils/EventBus'
import Events from '../utils/Events'
import AddReceiptCard from '@/components/reports/AddReceiptCard.vue'

export default {
  name: 'expenseReport',
  components: {
    AddReceiptCard
  },

  mixins: [Events],

  data() {
    return {
      loading: false,
      mocKReportId: 'Report1',
      // receipts: []
    }
  },

  watch: {
    getCurrencies() {
      if(this.currencies) this.loading = false
    }
  },

  computed: {
    ...mapGetters({
      receipts: 'getAllReceipts',
      currencies: 'getCurrencies'
    })
  },

  created() {
    this.$store.dispatch('retrieveCurrencyValues')
  }
}
</script>

<style lang="scss" scoped>

$mobile-breakpoint: 767px;

.teams {
  flex-wrap: wrap
}

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
