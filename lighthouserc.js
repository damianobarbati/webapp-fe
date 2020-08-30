module.exports = {
  ci: {
    collect: { staticDistDir: './build' },
    upload: { target: 'temporary-public-storage' },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'apple-touch-icon': 'warn',
        bypass: 'warn',
        'color-contrast': 'warn',
        'csp-xss': 'warn',
        'document-title': 'warn',
        'installable-manifest': 'warn',
        'maskable-icon': 'warn',
        'meta-description': 'warn',
        'non-composited-animations': 'warn',
        'offline-start-url': 'warn',
        'service-worker': 'warn',
        'splash-screen': 'warn',
        'themed-omnibox': 'warn',
        'unsized-images': 'warn',
        'unminified-javascript': 'warn',
        'without-javascript': 'warn',
        'works-offline': 'warn',

        /**
         * Mixpanel shit
         *
         * @link https://github.com/mixpanel/mixpanel-js/pull/285
         */
        'no-unload-listeners': 'warn',

        'unused-javascript': ['error', { maxLength: 2 }],
      },
    },
  },
};
