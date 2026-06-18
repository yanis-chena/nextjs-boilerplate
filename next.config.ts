import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ✅ Supprime X-Frame-Options (incompatible avec l'embed SharePoint)
          // X-Frame-Options: ALLOWALL n'est pas une valeur standard reconnue par les navigateurs

          // ✅ CSP frame-ancestors : standard moderne pour autoriser les iframes
          // Remplace "helpline.sharepoint.com" par ton vrai domaine SharePoint si différent
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://helpline.sharepoint.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;