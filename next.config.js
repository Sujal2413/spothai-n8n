module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'spothai.vercel.app'],
  },
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://your-supabase-url.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your-supabase-anon-key',
    NEXT_PUBLIC_SUPABASE_SERVICE_KEY: 'your-supabase-service-key',
    NEXT_PUBLIC_JWT_SECRET: 'your-jwt-secret',
    NEXT_PUBLIC_API_URL: 'https://your-api-url.render.com',
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none'",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'Feature-Policy',
            value: "geolocation 'self'; microphone 'none'; camera 'none'",
          },
        ],
      },
    ];
  },
};