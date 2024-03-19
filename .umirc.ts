import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index/index" },
  ],
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 资源访问路径，默认/
  define: {
    "process.env.UPDATER_HOST": process.env.UPDATER_HOST,
  }
});
