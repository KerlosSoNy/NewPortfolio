import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          frameSrc: ["https://allowed-iframe-host.com"],
          // ...
        },
      }
};

export default withNextVideo(nextConfig);