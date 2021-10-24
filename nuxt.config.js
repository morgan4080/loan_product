export default {
  // Target: https://go.nuxtjs.dev/config-target
  /*target: 'static',*/

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Loan Products',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js'
      },
      {
        src: 'https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js'
      },
      {
        src: 'https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
