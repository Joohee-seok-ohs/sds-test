import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SDS',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
    },
    rollupOptions: {
      external: (id) => {
        return ['react', 'react-dom', 'react-aria-components', 'clsx'].some(pkg => 
          id === pkg || id.startsWith(`${pkg}/`)
        );
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-aria-components': 'ReactAriaComponents',
          'clsx': 'clsx',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
  },
});
