<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite';
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
<<<<<<< HEAD
    plugins: [react()],
=======
    plugins: [react(), tailwindcss()],
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
