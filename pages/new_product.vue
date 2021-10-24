<template>
  <div class="flex-col h-screen w-full font-body overflow-y-auto  bg-white" style="min-height: 640px;">
    <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
      <nav class="flex py-4" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div class="flex items-center">
              <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <router-link to="/" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                Loan Products
              </router-link>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <router-link to="/new_product" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">
                New Product
              </router-link>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <router-link to="/loan_amortization" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">
                Loan Amortization
              </router-link>
            </div>
          </li>
        </ol>
      </nav>
      <div class="py-3 md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <div class="flex flex-col">
            <div class="flex items-center w-full text-lg font-semibold">
              <span class="ml-2 text-gray-900">New Loan Product</span>
            </div>
            <form @submit.prevent="submitProduct">
              <div class="flex w-full pt-6 space-x-4 md:space-x-12">
                <div class="w-1/2">
                  <div class="space-y-1">
                    <label for="name" class="block text-sm font-medium text-gray-500">Product name*</label>
                    <input id="name" v-model="form.product_name" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <label for="financing_method" class="block text-sm font-medium text-gray-500">Financing method*</label>
                    <select id="financing_method" v-model="form.financing_method" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(method, i) in financing_methods" :key="i">
                        {{ method.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Interest -&nbsp; </span><span class="font-light text-xs">'Fixed' rate is charged once for the entire period of the loan</span>
              </div>
              <div class="flex items-center pt-4">
                <input id="graduated_interest" v-model="form.graduated_interest" type="checkbox" class="shadow-sm w-4 border-gray-200  focus:border-blue-500 block sm:text-sm bg-gray-100 rounded-md">
                <span class="block text-sm font-medium text-gray-500 ml-4">Graduated interest</span>
              </div>
              <div v-if="!form.graduated_interest" class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/2">
                  <div class="space-y-1">
                    <label for="interest_rate" class="block text-sm font-medium text-gray-500">Interest rate*</label>
                    <input id="interest_rate" v-model="form.interest_rate" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md" placeholder="eg. 10.0">
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <label for="interest_period" class="block text-sm font-medium text-gray-500">Interest period*</label>
                    <select id="interest_period" v-model="form.interest_period" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(period, i) in interest_periods" :key="i" :value="period.name">
                        {{ period.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/2">
                  <div>
                    <label for="calc_method" class="block text-sm font-medium text-gray-500">Calculation method*</label>
                    <select id="calc_method" v-model="form.interest_calculation_method" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(method, i) in interest_calculation_methods" :key="i" :value="method.name">
                        {{ method.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <label for="interest_fee_rule" class="block text-sm font-medium text-gray-500">Fee rule*</label>
                    <select id="interest_fee_rule" v-model="form.interest_fee_rule" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(rule, i) in interest_fee_rule" :key="i" :value="rule.name">
                        {{ rule.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Loan fees -&nbsp; </span><span class="font-light text-xs">This will be added to the loan value or optionally deducted from disbursement amount.</span>
              </div>
              <div class="flex flex-col w-full pt-4">
                <div class="grid grid-cols-7 border border-gray-100">
                  <div class="block border-r text-sm font-medium text-gray-500">
                    Fee name
                  </div>
                  <div class="block border-r px-1 text-sm font-medium text-gray-500">
                    Account number
                  </div>
                  <div class="block border-r px-1 text-sm font-medium text-gray-500">
                    Liability
                  </div>
                  <div class="block border-r px-1 text-sm font-medium text-gray-500">
                    Fee type
                  </div>
                  <div class="block border-r px-1 text-sm font-medium text-gray-500">
                    Deduction rule
                  </div>
                  <div class="block border-r px-1 text-sm font-medium text-gray-500">
                    Fee value
                  </div>
                  <div class="block border-r px-1 text-sm font-medium text-gray-500">
                    Fee active
                  </div>
                </div>
                <div v-for="(fee, i) in form.loan_fees" :key="i" class="grid grid-cols-7 border-gray-100">
                  <input id="fee_name" v-model="fee.fee_name" type="text" class="shadow-sm my-1 border-gray-200 focus:border-blue-500 block sm:text-sm">
                  <input id="account_number" v-model="fee.account_number" type="text" class="shadow-sm my-1 border-l-0 border-gray-200 focus:border-blue-500 block sm:text-sm">
                  <select id="fee_type" v-model="fee.liable" class="shadow-sm my-1 border-l-0 border-gray-200 focus:border-blue-500 block sm:text-sm">
                    <option v-for="(type, x) in liability_types" :key="x" :value="type">
                      {{ type }}
                    </option>
                  </select>
                  <select id="fee_type" v-model="fee.fee_type" class="shadow-sm my-1 border-l-0 border-gray-200 focus:border-blue-500 block sm:text-sm">
                    <option v-for="(type, x) in fee_types" :key="x" :value="type">
                      {{ type }}
                    </option>
                  </select>
                  <select id="deduction_rule" v-model="fee.deduction_rule" class="shadow-sm my-1 border-l-0 border-gray-200 focus:border-blue-500 block sm:text-sm">
                    <option v-for="(type, x) in deduction_rules" :key="x" :value="type">
                      {{ type }}
                    </option>
                  </select>
                  <input id="fee_value" v-model="fee.fee_value" type="text" class="shadow-sm my-1 border-l-0 border-gray-200 focus:border-blue-500 block sm:text-sm">
                  <select id="fee_active" v-model="fee.fee_status" class="shadow-sm my-1 border-l-0 border-gray-200 focus:border-blue-500 block sm:text-sm">
                    <option v-for="(type, x) in fee_statuses" :key="x" :value="type">
                      {{ type }}
                    </option>
                  </select>
                </div>
                <button type="button" class="inline-flex block my-4 shadow-sm rounded-md relative w-36" @click="addLoanFee">
                  <span class="inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-r-0 border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                    Add loan fee
                  </span>
                  <span class="inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Controls -&nbsp; </span><span class="font-light text-xs">Limits for amount and period of the loan</span>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/3">
                  <div>
                    <label for="loan_period_limits_min" class="block text-sm font-medium text-gray-500">Loan period limits (max)*</label>
                    <input id="loan_period_limits_min" v-model="form.controls.loan_period_limits.max" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/3">
                  <div>
                    <label for="loan_period_limits_max" class="block text-sm font-medium text-gray-500">Loan period limits (max)*</label>
                    <input id="loan_period_limits_max" v-model="form.controls.loan_period_limits.max" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/3">
                  <div>
                    <label for="loan_period_limits_duration" class="block text-sm font-medium text-gray-500">Loan period*</label>
                    <select id="loan_period_limits_duration" v-model="form.controls.loan_period_limits.duration" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(period, i) in interest_periods" :key="i" :value="period.name">
                        {{ period.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/2">
                  <div>
                    <label for="amount_limit_min" class="block text-sm font-medium text-gray-500">Amount limit (min)*</label>
                    <input id="amount_limit_min" v-model="form.controls.amount_limits.min" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <label for="amount_limit_max" class="block text-sm font-medium text-gray-500">Amount limit (max)*</label>
                    <input id="amount_limit_max" v-model="form.controls.amount_limits.max" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Payment terms -&nbsp; </span><span class="font-light text-xs">Payment cycle</span>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/3">
                  <div>
                    <label for="payment_cycle" class="block text-sm font-medium text-gray-500">Loan period*</label>
                    <select id="payment_cycle" v-model="form.payment_terms.payment_cycle" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(period, i) in interest_periods" :key="i" :value="period.name">
                        {{ period.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Grace Period -&nbsp; </span><span class="font-light text-xs">Delay the first payment by the number time period indicated below</span>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/2">
                  <div>
                    <label for="grace_period" class="block text-sm font-medium text-gray-500">Grace period*</label>
                    <input id="grace_period" v-model="form.grace.period" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <label for="grace_interval" class="block text-sm font-medium text-gray-500">Grace interval*</label>
                    <select id="grace_interval" v-model="form.grace.interval" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 ring-opacity-25 focus:ring-2 bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option v-for="(interval, i) in grace_intervals" :key="i" :value="interval">
                        {{ interval }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Availability -&nbsp; <span class="font-light text-xs">What days of the month should this loan be available? (Enter a comma separated list e.g 1,2,10-15 to make the loan available on the first,second and from the tenth to fifteenth of every month.)</span></span>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/3">
                  <div>
                    <label for="availability" class="block text-sm font-medium text-gray-500">Loan availability*</label>
                    <input id="availability" v-model="form.availability" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Status -&nbsp; </span><span class="font-light text-xs">Do you wish to make this loan product active/inactive?</span>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <button
                  type="button"
                  :class="{ 'bg-blue-600' : form.loan_status, 'bg-gray-200' : !form.loan_status }"
                  class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  role="switch"
                  aria-checked="false"
                  @click="form.loan_status = !form.loan_status"
                >
                  <span class="sr-only">Use setting</span>
                  <span aria-hidden="true" :class="{ 'translate-x-5' : form.loan_status, 'translate-x-0' : !form.loan_status }" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" />
                </button>
              </div>
              <div class="w-full flex my-16">
                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150 ml-auto">
                  <svg v-if="loading" class="animate-spin -&nbsp;ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Save Loan Product</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      loading: false,
      form: {
        loan_status: true,
        product_name: null,
        financing_method: null,
        graduated_interest: false,
        interest_rate: null,
        interest_period: null,
        interest_calculation_method: null,
        interest_fee_rule: null,
        loan_fees: [] as any,
        controls: {
          amount_limits: {
            min: null,
            max: null
          },
          loan_period_limits: {
            min: null,
            max: null,
            duration: null
          }
        },
        payment_terms: {
          payment_cycle: null
        },
        grace: {
          period: null,
          interval: null
        },
        availability: null
      },
      financing_methods: [
        {
          id: 1,
          name: 'Mobile money'
        }
      ],
      grace_intervals: [
        'Days',
        'Weeks',
        'Months',
        'Years'
      ],
      interest_periods: [
        {
          id: 1,
          name: 'Per day'
        },
        {
          id: 2,
          name: 'Per week'
        },
        {
          id: 3,
          name: 'Per month'
        },
        {
          id: 4,
          name: 'Per year'
        },
        {
          id: 5,
          name: 'Fixed fee'
        }
      ],
      interest_calculation_methods: [
        {
          id: 1,
          name: 'Flat rate'
        },
        {
          id: 2,
          name: 'Reducing balance'
        }
      ],
      interest_fee_rule: [
        {
          id: 1,
          name: 'Deduct'
        },
        {
          id: 2,
          name: "Don't deduct"
        }
      ],
      fee_types: [
        'Rate',
        'Fixed Amount'
      ],
      deduction_rules: [
        'Deduct from disbursement',
        'Pre-paid',
        'Don not deduct'
      ],
      fee_statuses: [
        'Active',
        'Not active'
      ],
      liability_types: [
        'Customer',
        'Lender'
      ]
    }
  },
  methods: {
    submitProduct () {
      this.loading = true
      // eslint-disable-next-line no-console
      console.log(this.form)
    },
    addLoanFee () {
      this.form.loan_fees.push({
        fee_name: null,
        liable: null,
        account_number: null,
        fee_type: null,
        deduction_rule: null,
        fee_value: null,
        fee_status: null
      })
    }
  }
})
</script>

<style scoped>
.nuxt-link-exact-active {
  color: blue;
}
</style>
