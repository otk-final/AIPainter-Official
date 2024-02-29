import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index/index" },
  ],
  // proxy: {
  //   '/api': {
  //     'target': 'https://wx.yryz3.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});
