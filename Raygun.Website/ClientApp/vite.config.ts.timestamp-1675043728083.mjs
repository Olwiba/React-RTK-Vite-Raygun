// vite.config.ts
import { defineConfig } from "file:///C:/Workspace/React-RTK-Vite-Raygun/Raygun.Website/ClientApp/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Workspace/React-RTK-Vite-Raygun/Raygun.Website/ClientApp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mkcert from "file:///C:/Workspace/React-RTK-Vite-Raygun/Raygun.Website/ClientApp/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), mkcert()],
  server: {
    port: 8008,
    https: true,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://localhost:7153",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxXb3Jrc3BhY2VcXFxcUmVhY3QtUlRLLVZpdGUtUmF5Z3VuXFxcXFJheWd1bi5XZWJzaXRlXFxcXENsaWVudEFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcV29ya3NwYWNlXFxcXFJlYWN0LVJUSy1WaXRlLVJheWd1blxcXFxSYXlndW4uV2Vic2l0ZVxcXFxDbGllbnRBcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1dvcmtzcGFjZS9SZWFjdC1SVEstVml0ZS1SYXlndW4vUmF5Z3VuLldlYnNpdGUvQ2xpZW50QXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIG1rY2VydCgpXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODAwOCxcbiAgICBodHRwczogdHJ1ZSxcbiAgICBzdHJpY3RQb3J0IDogdHJ1ZSxcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknIDoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwczovL2xvY2FsaG9zdDo3MTUzJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGknKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VyxTQUFTLG9CQUFvQjtBQUMxWSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDM0IsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsWUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLE1BQ0wsUUFBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsTUFBTTtBQUFBLE1BQ2xEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
