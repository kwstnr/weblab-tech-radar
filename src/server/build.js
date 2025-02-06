import { build } from 'esbuild';

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'es2022',
  outdir: 'dist',
  sourcemap: true,
  external: [
    'apollo-server',
    '@apollo/server',
    'mongoose',
    'dotenv',
  ],
}).catch(() => process.exit(1));
