import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NvlBot - Docs",
  description: "Neverlose Bot 使用文档",
  base: "/NvlBot-Docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/" },
      {
        text: "交流",
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=sHd8AQiZFkRDAQAjzE6iF7DYK-Q_oZt-&authKey=JjR%2BFXBD68s8HFuhIjc8s%2BDG3zvu1VTTyvSmm16w2k7en7IWUn8FfqjJWt1yLgEe&noverify=0&group_code=496923913",
      },
    ],
    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "基础指南",
        items: [
          {
            text: "快速开始",
            collapsed: true,
            link: "/guide/quickstart",
            items: [{ text: "安装 JDK", link: "/guide/jdk_install" }],
          },
          {
            text: "开始部署",
            collapsed: true,
            items: [
              { text: "Windows", link: "/guide/depoly/windows" },
              {
                text: "Linux",
                collapsed: true,
                link: "/guide/depoly/linux/index",
                items: [
                  { text: "Docker", link: "/guide/depoly/linux/docker" },
                  {
                    text: "Docker Compose",
                    link: "/guide/depoly/linux/docker-compose",
                  },
                ],
              },
            ],
          },
          {
            text: "后台管理",
            link: "/guide/admin/index",
          },
          {
            text: "Bot 指令",
            link: "/guide/bot/index",
          },
        ],
      },
      {
        text: "前端项目",
        items: [
          {
            text: "前端介绍",
            link: "/frontend/index",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/harenk1337" }],
  },
  appearance: "dark",
  cleanUrls: true,
  lastUpdated: true,
});
