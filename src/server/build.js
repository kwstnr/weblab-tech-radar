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
    '@apollo/server',
    'mongoose',
    'dotenv',
    'uuid',
    'bcrypt-ts',
  ],
}).catch(() => process.exit(1));
