/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "uploads.tiendada.com"
            }
        ]
    }
}

module.exports = nextConfig
