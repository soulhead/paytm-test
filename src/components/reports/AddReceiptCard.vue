<template>
  <div class="col-sm-12 col-md-4">
    <div v-if="!createMode" class="add-card card" @click="addReceipt">
        <button aria-label="Add a card">
            <span class="btn-add-icon">+</span>
        </button>
    </div>
    <div v-else class="card new-receipt-card">
      <div class="card-header">
          {{ title }}
      </div>
      <div class="card-body">
        <label class="receipt-label" for="receiptName">{{ descLabel }}</label>
        <div class="mb-3">
            <input type="text" name="description" v-model="description">
        </div>
        <label class="receipt-label mt-3" for="receiptName">{{ amountLabel }}</label>
        <div class="mb-3">
            <input type="text" name="amount" v-model="amount">
        </div>
        <div class="mb-3">
            <label for="filter" class="label-field">{{ currencyLabel }} </label>
            <select id="filter" class="dropdown ml-2" v-model="currency">
                <option value="CAD">CAD</option>
            </select>
        </div>
        <div class="actions">
            <a href="#" @click="onCancelNewReceipt" class="btn btn-secondary btn-cancel">Cancel</a>
            <a href="#" @click="onSaveNewReceipt" class="btn btn-primary btn-save">Save</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'AddReceiptCard',

    data() {
      return {
          title: 'Add a new receipt',
          descLabel: 'Enter a description',
          amountLabel: 'Enter the amount',
          currencyLabel: 'Select a currency',
          createMode: false,
          receiptName: '',
          currency: 'CAD'
      }
    },

    methods: {
      addReceipt() {
          this.createMode = true
      },
      
      onCancelNewReceipt() {
        this.createMode = false
        this.receiptName = ''
      },

      onSaveNewReceipt() {
        this.createMode = false
        this.$emit('receiptCreated', { name: this.receiptName })
        this.receiptName = ''
      }
    }
}
</script>

<style lang="scss" scoped>

    $mobile-breakpoint: 767px;

    .receipt-list {
        list-style: none;
    }

    .new-receipt-card {
        align-content: center;
        margin-bottom: 2rem;
    }

    .add-card {
        height: 5rem;
        margin-bottom: 2rem;
        align-content: center;
        overflow: hidden;
        transition: all 0.5s ease;

        @media screen and (min-width: $mobile-breakpoint) {
            min-height: 17rem;
            min-width: 17rem;
            height: auto;
        }

        button {
            border: none;
            background: none;
            width: 100%;
            height: 100%;
            font-size: 3rem;
            color: var(--color-green);

            @media screen and (min-width: $mobile-breakpoint) {
                font-size: 10rem;
            }

            &:focus {
                outline: 10px auto -webkit-focus-ring-color;
            }
        }

        &:hover {
            border: 1px solid var(--color-green);
            background-color: var(--color-green);
        }
    }

    .new-receipt-card {
        min-width: 17rem;
    }

    .btn-add-icon {
        display: flex;
        align-content: center;
        justify-content: center;
        transition: color 0.3s ease;

        &:focus,
        &:hover {
            color: white;
        }
    }

    .btn-cancel {
        margin-right: .25rem;
        margin-top: .75rem;
    }

    .btn-save {
        border: 1px solid var(--color-green);
        background-color: var(--color-green);
        margin-left: .25rem;
        margin-top: .75rem;

        &:hover {
            background-color: var(--color-green-dark);
        }

        &.btn-primary:not(:disabled):not(.disabled).active,
        &.btn-primary:not(:disabled):not(.disabled):active,
        &.show>.btn-primary.dropdown-toggle {
            border: 1px solid var(--color-border-gray);
            background-color: var(--color-border-gray);
        }
    }

    .actions,
    .receipt-label {
        display: block;

        @media screen and (min-width: $mobile-breakpoint) {
            display: inline;
        }
    }


</style>