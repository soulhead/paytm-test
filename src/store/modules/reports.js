// import http from '../../utils/api/http'
import config from '../../config'

export default () => ({
  state: {
    receipts: [],
    reports: {},
    currencyValues: {}
  },
  getters: {
    getReport: state => (reportId) => state.reports[reportId],
    getAllReports: state => state.reports,
    getReportReceipts: state => (reportId) => state.receipts.find(receipt => receipt.reportId === reportId),
    getAllReceipts: state => state.receipts,
    getSingleReceipt: state => (receiptId) => state.receipts.find(receipt => receipt.is === receiptId),
    getCanadianValue: state => ({ amount, currencyId }) => {
      const index = state.currencyValues.rates[currencyId]
      return amount / index
    },
    getCurrencies: state => state.currencyValues.rates
  },
  mutations: {
    ADD_RECEIPT: (state, data) => {
      state.receipts.push(data)
    },
    UPDATE_RECEIPT: (state, { receiptId, data }) => {
      const index = state.receipts.findIndex(receipt => receipt.id === receiptId)
      state.receipts[index] = data
    },
    SET_CURRENCY_VALUES: (state, data) => {
      state.currencyValues = data
    }
  },
  actions: {
    // retrieveCurrencyValues: async (context) => {
    //   await http.get()
    //   .then((response) => {
    //     console.log('retrieving currencies', response)
    //     context.commit('SET_CURRENCY_VALUES', response.data)
    //   })
    //   .catch((error) => {
    //     // throw new Error(error)
    //     context.commit('SET_CURRENCY_VALUES', config.mockCurrencies)
    //     console.log('mock currencies', error)
    //   })
    // }

    retrieveCurrencyValues: (context) => {
      context.commit('SET_CURRENCY_VALUES', config.mockCurrencies)
    }
  }
})