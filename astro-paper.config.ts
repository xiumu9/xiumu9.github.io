import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://xiumu9.github.io/",
    title: "木雨博客",
    description: "记录技术与生活",
    author: "xiumu9",
    profile: "https://github.com/xiumu9",
    avatar: "yyyouth.jpg",
    logoText: "xiumu9",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/xiumu9" },
    { name: "douyin",   url: "#" },
    { name: "wechat",   url: "#" },
    { name: "mail",     url: "mailto:xiumu@tuta.io" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
  donate: {
    enabled: true,
    wechat: "/qr/wechat-placeholder.svg",
    alipay: "/qr/alipay-placeholder.svg",
    tip: "如果觉得文章有帮助，欢迎打赏支持",
  },
});