<template>
  <div class="flex-col h-screen w-full font-body overflow-y-auto bg-white" style="min-height: 640px;">
    <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
      <div class="py-3 md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <div class="flex flex-col">
            <div class="space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end">
              <div class="space-x-1">
                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" @click="$router.push('/new_product')">
                  New product
                </button>
                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" @click="$router.push('/new_product')">
                  Edit
                </button>
                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-red-300 shadow-sm text-xs font-medium rounded text-red-700 bg-red-200 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Delete
                </button>
              </div>

              <span class="relative z-0 inline-flex shadow-sm rounded-md ml-auto">
                <button type="button" class="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div class="relative inline-block text-left hidden">
                  <div>
                    <button type="button" class="-ml-px relative inline-flex items-center px-2.5 py-1.5 border border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" @click="showCategories = !showCategories">
                      Select category <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div
                      v-if="showCategories"
                      class="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <button
                          v-for="(cat, i) in loanCategories"
                          :id="`menu-item-`+i"
                          :key="i"
                          type="button"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                        >{{ cat }}</button>
                      </div>
                    </div>
                  </transition>
                </div>
                <button type="button" class="-ml-px relative inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                </button>
              </span>
            </div>
            <div class="-my-2 pt-6 overflow-x-auto sm:-mx-6 lg:-mx-8 hidden">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <input class="rounded" type="checkbox">
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Loans
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customers
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer categories
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Activated
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Weight
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">
                            Edit
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="(prod, i) in loanProducts" :key="i">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <input class="rounded" type="checkbox">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {{ prod.product }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.status }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.loans }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.customers }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.customer_categories }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.activated }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.weight }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ prod.action }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" class="text-blue-600 hover:text-blue-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="w-full mt-12 text-sm">
              <!--Card-->
              <div id="recipients" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
                  <thead>
                    <tr>
                      <th data-priority="1">

                      </th>
                      <th data-priority="2">
                        Product
                      </th>
                      <th data-priority="3">
                        Status
                      </th>
                      <th data-priority="4">
                        Loans
                      </th>
                      <th data-priority="5">
                        Customers
                      </th>
                      <th data-priority="6">
                        Customer categories
                      </th>
                      <th data-priority="7">
                        Activated
                      </th>
                      <th data-priority="8">
                        Weight
                      </th>
                      <th data-priority="9">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(prod, i) in loanProducts">
                      <td class="text-center">
                        <input class="rounded" type="checkbox">
                      </td>
                      <td class="text-center">{{ prod.product }}</td>
                      <td class="text-center">{{ prod.status }}</td>
                      <td class="text-center">{{ prod.loans }}</td>
                      <td class="text-center">{{ prod.customers }}</td>
                      <td class="text-center">{{ prod.customer_categories }}</td>
                      <td class="text-center">{{ prod.activated }}</td>
                      <td class="text-center">{{ prod.weight }}</td>
                      <td class="text-center">{{ prod.action }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--/Card-->
            </div>
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
      showCategories: false,
      loanCategories: [
        'category1',
        'category2',
        'category1'
      ],
      loanProducts: [
        {
          id: 1,
          product: null,
          status: null,
          loans: null,
          customers: null,
          customer_categories: null,
          activated: null,
          weight: null,
          action: null
        }
      ]
    }
  },
  mounted () {
    jQuery(document).ready(function () {
      const table = (<any>jQuery('#example').DataTable( { responsive: true })).columns.adjust().responsive.recalc()
      // eslint-disable-next-line no-console
      console.log(table)
    })
  }
})
</script>

<style scoped>
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
