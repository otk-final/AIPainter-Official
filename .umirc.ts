import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index/index" },
  ],
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    { rel: 'icon', href: './favicon.ico', type: 'image/x-icon' },
  ],
  // 修改title
  title: '鹦鹉智绘',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 资源访问路径，默认/
  define: {
    "process.env.UPDATER_HOST": process.env.UPDATER_HOST,
  }
});
