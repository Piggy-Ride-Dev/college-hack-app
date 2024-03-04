/** @type {import('next').NextConfig} */
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    distDir: "build",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    output: "standalone",
};

export default nextConfig;
