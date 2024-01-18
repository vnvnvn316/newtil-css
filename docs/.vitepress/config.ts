import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true, //FIXME
  base: "/newtil-css/",
  title: "Newtil CSS",
  description: "Utility based CSS",
  appearance: false, // darkmode
  lang: "ko",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/newtil-css@latest/dist/style.css",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/newlecture-corp/newtil-css" },
    ],

    search: {
      provider: "local",
    },

    nav: [{ text: "홈", link: "/" }],

    sidebar: [
      {
        text: "소개",
        base: "/guide",
        items: [
          { text: "시작하기", link: "/getting-started" },
          { text: "스타일 재정의하기", link: "/customizing" },
        ],
      },
      // {
      //   text: "유틸리티",
      //   base: "/utility",
      //   items: [
      //     { text: "유틸리티 시작하기", link: "/getting-started" },
      //     { text: "display", link: "/display" },
      //   ],
      // },
    ],

    outline: {
      label: "컨텐츠",
    },

    footer: {
      copyright: "Copyright © 2024 newlecture",
    },
  },
});