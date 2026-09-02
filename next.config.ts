import type { NextConfig } from 'next'

/**
 * Two build targets, one codebase.
 *
 *   npm run build         → Vercel/Node target. /api/contact exists and works.
 *   npm run build:static  → `output: 'export'`. There is no server, so the
 *                           contact route is excluded from the build and the
 *                           form falls back to an honest, prefilled mailto
 *                           handoff. See README.md.
 */
const isStaticExport = process.env.STATIC_EXPORT === '1'

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: 'export' as const } : {}),
  trailingSlash: true,

  /**
   * The contact handler is `route.api.ts`. On the server build `api.ts` is a
   * recognised page extension, so the file becomes /api/contact. On the static
   * export it is not, so the file is invisible to the build — which is what
   * lets `output: 'export'` succeed without deleting the route from the repo.
   */
  pageExtensions: isStaticExport ? ['tsx', 'ts'] : ['tsx', 'ts', 'api.ts'],

  images: {
    // A static export has no image optimiser. We ship pre-sized WebP either
    // way, so the unoptimised path is the honest default for both targets.
    unoptimized: true,
  },

  poweredByHeader: false,

  // Security headers for the Vercel target. The static export ships the same
  // three headers in public/_headers for hosts that read that file.
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
              ],
            },
          ]
        },
      }),
}

export default nextConfig
