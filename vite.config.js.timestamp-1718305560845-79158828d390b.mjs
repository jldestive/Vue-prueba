// vite.config.js
import path from "path";
import tailwind from "file:///C:/Users/Laos/Desktop/Entrevista/New%20folder/Vue-prueba/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/Laos/Desktop/Entrevista/New%20folder/Vue-prueba/node_modules/autoprefixer/lib/autoprefixer.js";
import { defineConfig } from "file:///C:/Users/Laos/Desktop/Entrevista/New%20folder/Vue-prueba/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Laos/Desktop/Entrevista/New%20folder/Vue-prueba/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Laos\\Desktop\\Entrevista\\New folder\\Vue-prueba";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMYW9zXFxcXERlc2t0b3BcXFxcRW50cmV2aXN0YVxcXFxOZXcgZm9sZGVyXFxcXFZ1ZS1wcnVlYmFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExhb3NcXFxcRGVza3RvcFxcXFxFbnRyZXZpc3RhXFxcXE5ldyBmb2xkZXJcXFxcVnVlLXBydWViYVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTGFvcy9EZXNrdG9wL0VudHJldmlzdGEvTmV3JTIwZm9sZGVyL1Z1ZS1wcnVlYmEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJztcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0Y3NzOiB7XHJcblx0XHRwb3N0Y3NzOiB7XHJcblx0XHRcdHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0cGx1Z2luczogW3Z1ZSgpXSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHQnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1csT0FBTyxVQUFVO0FBQ3JYLE9BQU8sY0FBYztBQUNyQixPQUFPLGtCQUFrQjtBQUV6QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsS0FBSztBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1IsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUNyQztBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNuQztBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
