import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:
                    "henriquepochmann1757952828696.1281916.meusitehostgator.com.br",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
