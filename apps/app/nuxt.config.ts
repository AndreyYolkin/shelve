import { getIconCollections } from '@egoist/tailwindcss-icons'

export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "author",
          content: "Hugo Richard",
        },
      ],
    },
  },

  routeRules: {
    "/": { isr: true, prerender: true },
    "/login": { isr: true, prerender: true },
    "/app/**": { ssr: false },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
    private: {
      resendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
      authSecret: process.env.NUXT_PRIVATE_AUTH_SECRET,
      secret_encryption_key: process.env.NUXT_PRIVATE_SECRET_ENCRYPTION_KEY,
      secret_encryption_iterations: process.env.NUXT_PRIVATE_SECRET_ENCRYPTION_ITERATIONS,
    },
  },

  modules: [
    "@nuxt/image",
    "@vue-email/nuxt",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt"
  ],

  css: ['~/assets/style/main.css'],

  vueEmail: {
    autoImport: true,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast']
      }
    ]
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  ui: {
    icons: {
      extraProperties: {
        '-webkit-mask-size': 'contain',
        '-webkit-mask-position': 'center'
      },
      collections: {
        custom: {
          icons: {
            'linear': {
              body: ` 
                <svg stroke="currentColor" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.16414 58.4466C0.952764 57.5456 2.02625 56.978 2.6807 57.6325L37.3675 92.3193C38.0219 92.9737 37.4544 94.0472 36.5533 93.8358C19.0489 89.7296 5.2704 75.951 1.16414 58.4466ZM0.00179678 44.5446C-0.0149648 44.8138 0.0862253 45.0765 0.27689 45.2672L49.7328 94.723C49.9235 94.9137 50.1862 95.0152 50.4554 94.9982C52.7061 94.8579 54.9145 94.5612 57.0696 94.1186C57.7959 93.9694 58.0482 93.0771 57.5239 92.5529L2.44715 37.4761C1.92289 36.9518 1.03054 37.2041 0.881387 37.9304C0.438768 40.0855 0.141983 42.2939 0.00179678 44.5446ZM4.00038 28.2201C3.84222 28.5752 3.92278 28.9902 4.19765 29.2651L65.7349 90.8023C66.0098 91.0772 66.4248 91.1578 66.7799 90.9996C68.4767 90.2438 70.1211 89.3915 71.7061 88.4498C72.2306 88.1382 72.3115 87.4174 71.8801 86.9862L8.01388 23.1199C7.58249 22.6885 6.8618 22.7694 6.55017 23.2939C5.60842 24.8789 4.75617 26.5233 4.00038 28.2201ZM12.0258 17.1703C11.6742 16.8187 11.6524 16.2548 11.9837 15.8839C20.6905 6.13634 33.3558 0 47.4543 0C73.7131 0 95 21.2869 95 47.5457C95 61.6441 88.8637 74.3094 79.1161 83.0163C78.7453 83.3475 78.1813 83.3258 77.8296 82.9742L12.0258 17.1703Z" />
                </svg>
              `,
            },
            'volta': {
              body: `
                <svg stroke="currentColor" viewBox="0 0 106 88" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9647 3.97482C11.8628 2.50121 10.8133 1.32268 9.25435 0.76724C7.49343 -0.0183172 5.51756 -0.0690783 3.6679 0.989347C2.9761 1.38521 2.51572 1.75255 2.12994 2.19013C-0.0193291 4.16875 -0.66452 7.35001 0.760737 10.0311L0.765423 10.0287C1.09179 10.7368 1.41142 11.34 1.80382 12.074L32.086 60.1399L45.829 82.8369C46.6308 84.1592 47.7834 85.2569 49.1718 86.0202C50.5598 86.7836 52.1342 87.1853 53.7371 87.1853C55.3396 87.1853 56.9144 86.7836 58.3024 86.0202C59.6904 85.2569 60.8431 84.1592 61.6449 82.8369L103.816 13.2425C104.618 11.9206 105.041 10.4208 105.041 8.89376C105.042 7.36681 104.621 5.86656 103.82 4.54396C103.019 3.22138 101.866 2.12308 100.478 1.3595C99.0902 0.595927 97.5154 0.194029 95.9129 0.194223H64.2369C51.6864 0.194223 42.4307 5.44632 36.0622 15.6929L33.728 19.543L42.7234 32.0678L48.2585 22.9316C52.4879 16.2832 57.2925 13.861 64.7529 13.861L86.8589 13.8657L53.7223 68.542L44.3247 53.0039L44.3315 52.9915L43.9803 52.4338L37.1884 41.204L28.5929 28.0131L18.7542 12.3983L12.9647 3.97482Z" />
                  <path d="M7.30247 63.9331C7.07979 64.3103 6.81775 64.8431 6.67859 65.2397C6.00075 67.3441 6.4627 69.6257 7.84872 71.3232C7.91712 71.4179 7.98901 71.5021 8.06458 71.5742C8.55751 72.1203 9.15196 72.5966 9.83994 72.9754C13.1217 74.7836 17.2948 73.6931 19.1881 70.5418C19.5772 70.1177 19.9238 69.657 20.2217 69.1655L24.5226 62.0636L15.8455 49.0392L12.3186 54.8566L7.30247 63.9331Z" fill="white"/>
                </svg>
              `
            },
            'github': {
              body: `
                <svg stroke="currentColor" viewBox="0 0 96 95" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.0397 0.873108C21.475 0.873108 0 22.4147 0 49.0646C0 70.3672 13.7598 88.3995 32.8482 94.7817C35.2348 95.2614 36.1089 93.7447 36.1089 92.4689C36.1089 91.3516 36.0303 87.5221 36.0303 83.5321C22.6668 86.4049 19.884 77.7873 19.884 77.7873C17.7364 72.2022 14.5543 70.7667 14.5543 70.7667C10.1804 67.8145 14.8729 67.8145 14.8729 67.8145C19.7247 68.1337 22.2705 72.7613 22.2705 72.7613C26.5647 80.1011 33.4844 78.0272 36.2682 76.7504C36.6655 73.6386 37.9389 71.4844 39.291 70.2879C28.6327 69.1707 17.4187 65.022 17.4187 46.5109C17.4187 41.245 19.3264 36.9366 22.3492 33.586C21.8723 32.3894 20.2016 27.4417 22.8271 20.8196C22.8271 20.8196 26.8833 19.5428 36.0293 25.7664C39.945 24.7115 43.9832 24.1748 48.0397 24.1703C52.096 24.1703 56.2309 24.7294 60.0492 25.7664C69.1961 19.5428 73.2524 20.8196 73.2524 20.8196C75.8779 27.4417 74.2062 32.3894 73.7293 33.586C76.8317 36.9366 78.6607 41.245 78.6607 46.5109C78.6607 65.022 67.4468 69.0904 56.7088 70.2879C58.4591 71.8036 59.9695 74.6755 59.9695 79.2237C59.9695 85.6862 59.8908 90.8728 59.8908 92.4679C59.8908 93.7447 60.766 95.2614 63.1516 94.7826C82.24 88.3985 95.9998 70.3672 95.9998 49.0646C96.0785 22.4147 74.5248 0.873108 48.0397 0.873108Z" />
                </svg>
              `
            }
          }
        },
        ...getIconCollections(['heroicons', 'lucide'])
      }
    }
  },
})
