import { defineNuxtConfig } from "nuxt/config"

// Base config
import head from "./config/head"

// Hooks
import { generateOgImages } from "./hooks/generateOgImages"
import { getBlogPosts } from "./hooks/scripts/getBlogPosts"

export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },

  app: {
    head,
    pageTransition: { name: "fade", mode: "out-in" },
  },

  css: ["~/assets/css/main.scss"],

  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/robots",
      {
        disableNuxtContentIntegration: true,
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          Inter: [400, 500, 600, 700],
        },
      },
    ],
    [
      "@nuxtjs/tailwindcss",
      {
        viewer: false,
        config: "~/tailwind.config.ts",
      },
    ],
    [
      "nuxt-disqus",
      {
        shortname: "rrchs",
      },
    ],
    [
      "nuxt-gtag",
      {
        enabled: process.env.NODE_ENV === "production",
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    ],
  ],

  content: {
    highlight: {
      theme: {
        default: "github-dark",
        dark: "github-dark",
        light: "github-light",
      },
      preload: ["javascript", "typescript", "vue", "css", "html", "json", "bash", "yaml"],
    },
    markdown: {
      toc: {
        depth: 5,
      },
      rehypePlugins: [
        ["rehype-external-links", {
          target: "_blank",
          rel: "noreferrer noopener",
        }],
        ["rehype-autolink-headings", {
          behavior: "append",
        }],
      ],
    },
  },

  sitemap: {
    exclude: ["/api/content/posts/database.sql"],
    urls: getBlogPosts().map((post) => `https://rrchs.fr/blog/${post.slug}`),
  },

  site: {
    url: "https://rrchs.fr",
    name: "rrchs.fr",
  },

  pwa: {
    manifest: {
      name: "rrchs.fr",
      short_name: "rrchs.fr",
      theme_color: "#f56565",
      description:
        "Professional JavaScript developer from Turkey specializing in React.js, Vue.js, TypeScript, Node.js, and Flutter. Passionate about crafting innovative software solutions and continuously improving programming skills.",
      lang: "en",
      icons: [
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_PUpW2FW5OJurpO4Fs6t79JJGgMqcffHFPpta72qrsH',
      posthogHost: 'https://eu.i.posthog.com',
      social: {
        github: "https://github.com/yipfram/",
        linkedIn: "https://linkedin.com/in/romain-rochas",
        email: "romainrochas69@gmail.com",
      },
      isDev: process.env.NODE_ENV === "development",
    },
  },

  hooks: {
    "nitro:build:before": async () => {
      if (process.env.NODE_ENV === "production") await generateOgImages()
    },
  },

  compatibilityDate: "2025-01-16",
})
