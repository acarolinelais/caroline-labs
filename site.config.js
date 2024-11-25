const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Caroline Log",
    image: "/icon.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Developer",
    bio: "AI, Software Development, Design Thinking.",
    linkedin: "carolinelais",
    github: "acarolinelais",
  },
  projects: [
    {
    name: `Registration Form`,
      href: "https://github.com/acarolinelais/registration-form",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Caroline Log",
    description: "bem vindo(a) ao Caroline Log!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://rae-labs.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "pt-BR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    //pageId: process.env.NOTION_PAGE_ID,
    pageId: "13b4f4c3dbcf80f4b133ed446907862f",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
