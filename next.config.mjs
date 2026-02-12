import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
}

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")
export default withNextIntl(nextConfig)
