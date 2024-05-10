
module.exports = {
  seo: {
  "title": "logixalpartnerus",
  "description": "logixalpartnerus",
  "titleTemplate": "%s | logixalpartnerus",
  "author": "logixalpartnerus"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "logixalpartnerus",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://logixalpartnerus.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/home%20&%20garden",
    search: "/s?q=Brand",
    pdp: "/whole-watermelon-mini-fresh/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/whole-watermelon-mini-fresh/p",
      collection: "/home%20&%20garden",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/whole-watermelon-mini-fresh/p",
      collection: "/home%20&%20garden",
      collection_filtered: "/home%20&%20garden/?category-1=home%20&%20garden&brand=Brand&facets=category-1%2Cbrand%27",
      search: "/s?q=Brand",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://logixalpartnerus.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
