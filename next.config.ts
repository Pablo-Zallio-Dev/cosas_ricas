// next.config.js
module.exports = {
      allowedDevOrigins: ['192.168.0.16', 'localhost'],
      images: {
            remotePatterns: [
                  {
                        protocol: 'https',
                        hostname: 'drive.google.com',
                  },
                  {
                        protocol: 'https',
                        hostname: 'lh3.googleusercontent.com',
                  },
            ],
      },
};