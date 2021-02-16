export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'light-house',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      {rel:"manifest", href:"/site.webmanifest"},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap", rel:"stylesheet"}   ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'The Light House Africa',
      short_name: 'TLHA',
      lang: 'en',
    },
    icon: {
      iconSrc: ""
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
}
