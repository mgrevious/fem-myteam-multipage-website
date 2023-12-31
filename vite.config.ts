import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: mode === 'development' ? '/' : '/fem-myteam-multipage-website/',
    plugins: [react()],
  });
};
