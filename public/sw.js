if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[c]) return
    let t = {}
    const o = e => a(e, c),
      r = { module: { uri: c }, exports: t, require: o }
    s[c] = Promise.all(i.map(e => r[e] || o(e))).then(e => (n(...e), t))
  }
}
define(['./workbox-588899ac'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/113.30030b7f03307a49.js',
          revision: '30030b7f03307a49'
        },
        {
          url: '/_next/static/chunks/230.f5356e0d2d338605.js',
          revision: 'f5356e0d2d338605'
        },
        {
          url: '/_next/static/chunks/335.54bd035f602e6a33.js',
          revision: '54bd035f602e6a33'
        },
        {
          url: '/_next/static/chunks/457.bd3b929390f722ee.js',
          revision: 'bd3b929390f722ee'
        },
        {
          url: '/_next/static/chunks/483.5c290aa3cc2a6972.js',
          revision: '5c290aa3cc2a6972'
        },
        {
          url: '/_next/static/chunks/493.064eae544b72ddd2.js',
          revision: '064eae544b72ddd2'
        },
        {
          url: '/_next/static/chunks/547.176fe60fed4e6aae.js',
          revision: '176fe60fed4e6aae'
        },
        {
          url: '/_next/static/chunks/594-c94775f21f8a3841.js',
          revision: 'c94775f21f8a3841'
        },
        {
          url: '/_next/static/chunks/627.99700b3874601a2a.js',
          revision: '99700b3874601a2a'
        },
        {
          url: '/_next/static/chunks/664.6863c832d33388a7.js',
          revision: '6863c832d33388a7'
        },
        {
          url: '/_next/static/chunks/675.b73f41980c39ec6a.js',
          revision: 'b73f41980c39ec6a'
        },
        {
          url: '/_next/static/chunks/681.92f7c46f8bb06aab.js',
          revision: '92f7c46f8bb06aab'
        },
        {
          url: '/_next/static/chunks/807.ea3dcaaa7bc43eec.js',
          revision: 'ea3dcaaa7bc43eec'
        },
        {
          url: '/_next/static/chunks/900.571776924df5628e.js',
          revision: '571776924df5628e'
        },
        {
          url: '/_next/static/chunks/906.f133306059cc3cc3.js',
          revision: 'f133306059cc3cc3'
        },
        {
          url: '/_next/static/chunks/ea88be26.0916539e7153d77e.js',
          revision: '0916539e7153d77e'
        },
        {
          url: '/_next/static/chunks/framework-4556c45dd113b893.js',
          revision: '4556c45dd113b893'
        },
        {
          url: '/_next/static/chunks/main-24337e41c3359801.js',
          revision: '24337e41c3359801'
        },
        {
          url: '/_next/static/chunks/pages/_app-cc96e4ba1b1086a9.js',
          revision: 'cc96e4ba1b1086a9'
        },
        {
          url: '/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js',
          revision: 'a4ba2246ff8fb532'
        },
        {
          url: '/_next/static/chunks/pages/index-a2ca065bbf5e909a.js',
          revision: 'a2ca065bbf5e909a'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-ec881807be71af96.js',
          revision: 'ec881807be71af96'
        },
        {
          url: '/_next/static/css/250ff86455070da4.css',
          revision: '250ff86455070da4'
        },
        {
          url: '/_next/static/css/54e892480c07079a.css',
          revision: '54e892480c07079a'
        },
        {
          url: '/_next/static/css/5ff0d40026122dc7.css',
          revision: '5ff0d40026122dc7'
        },
        {
          url: '/_next/static/mkUrGsN6J3bX37jthtf-z/_buildManifest.js',
          revision: 'a73c22cc33e8ceb683ddbbf59ce3f5d8'
        },
        {
          url: '/_next/static/mkUrGsN6J3bX37jthtf-z/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-600.eot',
          revision: '18b837b5ba21408f30a8993b0add5517'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-600.svg',
          revision: '4b6d70263966b118667de999d2cddadf'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-600.ttf',
          revision: '8f07cdf20df454e3857ac1d5ee8bde31'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-600.woff',
          revision: 'd5a7daaedf64050d5b56e13462760b63'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-600.woff2',
          revision: '72993dddf88a63e8f226656f7de88e57'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-700.eot',
          revision: 'bd1de9fafc7197a73da5f1174345b686'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-700.svg',
          revision: 'b36aa291a196158c551f6fc353f39634'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-700.ttf',
          revision: '52a388e45b353640b2539bf082a30c14'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-700.woff',
          revision: '2ed184f355297674786cee87899e03b7'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-700.woff2',
          revision: '25b0e113ca7cce3770d542736db26368'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-regular.eot',
          revision: '9bb84f43a12747b2b89b64d4073a6859'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-regular.svg',
          revision: 'c26cc61af85aabbf51bd458e1e4e8aa5'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-regular.ttf',
          revision: '891f6ba4349c741c07868dec22e012b2'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-regular.woff',
          revision: 'f8ed328094e376b0b011d24029d0c2e6'
        },
        {
          url: '/assets/fonts/poppins-v20-latin-regular.woff2',
          revision: '9212f6f9860f9fc6c69b02fedf6db8c3'
        },
        {
          url: '/assets/images/author.webp',
          revision: '2060ef29b719b651bc3bcd3d92f2284b'
        },
        {
          url: '/assets/images/icon/android-icon-144x144.png',
          revision: '01319320264f6f12658ac97fbbf069f0'
        },
        {
          url: '/assets/images/icon/android-icon-192x192.png',
          revision: 'a963ff3c4e019bfd4c04df30d004d2b4'
        },
        {
          url: '/assets/images/icon/android-icon-36x36.png',
          revision: '57c3af7d993f277ddeaa449502b4a615'
        },
        {
          url: '/assets/images/icon/android-icon-48x48.png',
          revision: 'bcc15fb50ee7bf03de791760467929ac'
        },
        {
          url: '/assets/images/icon/android-icon-72x72.png',
          revision: 'dfca474948515016a14e0054ca34a977'
        },
        {
          url: '/assets/images/icon/android-icon-96x96.png',
          revision: '056a134bdcf32dea04a6e93d9e08a078'
        },
        {
          url: '/assets/images/icon/apple-icon-114x114.png',
          revision: 'c5bd9ab34e8775bdeca604eb115f4a52'
        },
        {
          url: '/assets/images/icon/apple-icon-120x120.png',
          revision: 'dad0e2b53032ebdd773b010a808167a1'
        },
        {
          url: '/assets/images/icon/apple-icon-144x144.png',
          revision: '01319320264f6f12658ac97fbbf069f0'
        },
        {
          url: '/assets/images/icon/apple-icon-152x152.png',
          revision: '408d580642391bd979f7486d6f566f5b'
        },
        {
          url: '/assets/images/icon/apple-icon-180x180.png',
          revision: 'f51271797e42179a80c39e340e90a39a'
        },
        {
          url: '/assets/images/icon/apple-icon-57x57.png',
          revision: 'c76d14e111de49d166183bad7c8adc71'
        },
        {
          url: '/assets/images/icon/apple-icon-60x60.png',
          revision: 'fc3149fd8d07c1074aefc7c50eb4de33'
        },
        {
          url: '/assets/images/icon/apple-icon-72x72.png',
          revision: 'dfca474948515016a14e0054ca34a977'
        },
        {
          url: '/assets/images/icon/apple-icon-76x76.png',
          revision: '592a3996d97a08c81570011e05ff9a1c'
        },
        {
          url: '/assets/images/icon/apple-icon-precomposed.png',
          revision: '7d1eec57609e1b25302afff57ea754a7'
        },
        {
          url: '/assets/images/icon/apple-icon.png',
          revision: '7d1eec57609e1b25302afff57ea754a7'
        },
        {
          url: '/assets/images/icon/favicon-16x16.png',
          revision: '0f621e3117a315991f346db3522a3c88'
        },
        {
          url: '/assets/images/icon/favicon-32x32.png',
          revision: '5770d5a76552d5c29714620d12faf320'
        },
        {
          url: '/assets/images/icon/favicon-96x96.png',
          revision: 'fec73d454dcaaf9c1e220097c7da7f1c'
        },
        {
          url: '/assets/images/icon/favicon.ico',
          revision: 'dae950d49f3f51312f7a6491d171ab62'
        },
        {
          url: '/assets/images/icon/ms-icon-144x144.png',
          revision: '01319320264f6f12658ac97fbbf069f0'
        },
        {
          url: '/assets/images/icon/ms-icon-150x150.png',
          revision: 'af1980df271238180fcc048b5410b3ad'
        },
        {
          url: '/assets/images/icon/ms-icon-310x310.png',
          revision: '4657738a912aea6ff6bc508139f78e19'
        },
        {
          url: '/assets/images/icon/ms-icon-70x70.png',
          revision: '06119f0f003c339852c251e13f873991'
        },
        {
          url: '/assets/images/image-placeholder.png',
          revision: '1632e46a5c79d43f3125ca62c54189cb'
        },
        {
          url: '/assets/images/pattern-bg.png',
          revision: '5f55bfef928ff382d9304e6463e575a7'
        },
        {
          url: '/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8'
        },
        {
          url: '/site.webmanifest',
          revision: 'c6f7f9dafb7c5fe3819144d5bea7cc52'
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
