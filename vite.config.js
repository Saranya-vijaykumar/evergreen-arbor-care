import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home2: resolve(__dirname, 'home-2.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        blog: resolve(__dirname, 'blog.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        contact: resolve(__dirname, 'contact.html'),
        admin: resolve(__dirname, 'admin.html'),
        serviceDetail: resolve(__dirname, 'service-detail.html'),
        blogDetail: resolve(__dirname, 'blog-detail.html')
      }
    }
  }
});
