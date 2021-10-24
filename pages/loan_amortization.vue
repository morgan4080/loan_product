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
          <form @submit.prevent="generateAmortization">
            <div class="flex flex-col">
              <div class="flex items-center w-full text-lg font-semibold pt-6">
                <span class="text-gray-700">Loan amortization -&nbsp; </span><span class="font-light text-xs">(Reducing balance calculation)</span>
              </div>
              <div class="flex w-full pt-4 space-x-4 md:space-x-12">
                <div class="w-1/3">
                  <div>
                    <label for="principle" class="block text-sm font-medium text-gray-500">Principle *</label>
                    <input id="principle" v-model="form.principle" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/3">
                  <div>
                    <label for="interest_rate" class="block text-sm font-medium text-gray-500">Interest rates *</label>
                    <input id="interest_rate" v-model="form.interest_rate" type="text" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
                <div class="w-1/3">
                  <div>
                    <label for="months" class="block text-sm font-medium text-gray-500">Months *</label>
                    <input id="months" v-model="form.months" type="number" class="mt-1 shadow-sm border-gray-200  focus:border-blue-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                  </div>
                </div>
              </div>
              <div class="w-full flex my-8">
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
                  <span>Generate</span>
                </button>
              </div>
            </div>
          </form>
          <table id="example0" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
            <thead>
              <tr>
                <th data-priority="1">
                  Principle
                </th>
                <th data-priority="2">
                  Interest rate
                </th>
                <th data-priority="3">
                  Months
                </th>
                <th data-priority="3">
                  Total
                </th>
                <th data-priority="3">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="(amor, i) in amortizations" :key="i">
                <td class="text-center">
                  {{ amor.principle }}
                </td>
                <td class="text-center">
                  {{ amor.interest_rate }}
                </td>
                <td class="text-center">
                  {{ amor.months }}
                </td>
                <td class="text-center">
                  {{ amor.total }}
                </td>
                <td class="text-center">
                  {{ amor.balance }}
                </td>
              </tr>
            </tbody>
          </table>
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
        principle: null,
        interest_rate: null,
        months: null
      },
      amortizations: [
        {
          principle: null,
          interest_rate: null,
          months: null,
          total: null,
          balance: null
        }
      ] as any
    }
  },
  methods: {
    generateAmortization () {
      this.loading = true
      // eslint-disable-next-line no-console
      console.log(this.form)
      function calcTotal (): number {
        return 0
      }
      function calcBalance (): number {
        return 0
      }
      if (!this.amortizations[0].principle) this.amortizations = []
      let amortization: object = {
        principle: this.form.principle,
        interest_rate: this.form.interest_rate,
        months: this.form.months,
        total: calcTotal(),
        balance: calcBalance()
      }
      this.amortizations.push(amortization)
      this.loading = false
    }
  },
  mounted () {
    jQuery(document).ready(function () {
      const table = (<any>jQuery('#example0').DataTable( {
        "responsive": true
      })).columns.adjust().responsive.recalc()
        // eslint-disable-next-line no-console
        console.log(table)
    })
  }
})
</script>

<style scoped>
.nuxt-link-exact-active {
  color: blue;
}
.dataTables_wrapper select,
.dataTables_wrapper .dataTables_filter input {
  color: #4a5568;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  line-height: 1.25;
  border-width: 2px;
  border-radius: .25rem;
  border-color: #edf2f7;
  background-color: #edf2f7;
}

table.dataTable.hover tbody tr:hover, table.dataTable.display tbody tr:hover {
  background-color: #ebf4ff;
}

.dataTables_wrapper .dataTables_paginate .paginate_button{
  font-weight: 700;
  border-radius: .25rem;
  border: 1px solid transparent;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current{
  color: #fff !important;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  font-weight: 700;
  border-radius: .25rem;
  background: #667eea !important;
  border: 1px solid transparent;
}

/*Pagination Buttons - Hover */
.dataTables_wrapper .dataTables_paginate .paginate_button:hover{
  color: #fff !important;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  font-weight: 700;
  border-radius: .25rem;
  background: #667eea !important;
  border: 1px solid transparent;
}

/*Add padding to bottom border */
table.dataTable.no-footer {
  border-bottom: 1px solid #e2e8f0;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}

/*Change colour of responsive icon*/
table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before, table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
  background-color: #667eea !important;
}

</style>
