const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Rae Labs",
    image: "/icon.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "IT Engineer",
    bio: "Cybersecurity, Mobile Security, Application Security.",
    email: "f0nte4@proton.me",
    linkedin: "xssrae",
    github: "xssrae",
    instagram: "r0quel",
  },
  projects: [
    {
    name: `MobileSec Journey`,
      href: "https://github.com/xssrae/mobilesec-jorney",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Rae Labs",
    description: "bem vindo(a) ao Rae Labs!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://rae-labs.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "pt-BR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

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
  revalidateTime: 5, // revalidate time for [slug], index
}

module.exports = { CONFIG }
