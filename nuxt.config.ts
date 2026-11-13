import { defineNuxtConfig } from "nuxt/config"

// Base config
import head from "./config/head"

// Hooks
import { generateOgImages } from "./hooks/generateOgImages"
import { getBlogPosts } from "./hooks/scripts/getBlogPosts"
import { getGitLastModified } from "./hooks/scripts/getGitLastModified"

const withLastmod = (loc: string, ...paths: string[]) => {
  const lastmod = getGitLastModified(...paths)
  return lastmod ? { loc, lastmod } : { loc }
}

export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
    prerender: {
      routes: ["/llms.txt"],
    },
  },

  app: {
    head,
    pageTransition: { name: "fade", mode: "out-in" },
  },

  css: ["~/assets/css/main.scss"],

  modules: [
    "@vercel/analytics",
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
    experimental: { sqliteConnector: "native" },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-dark",
            dark: "github-dark",
            light: "github-light",
          },
          langs: ["javascript", "typescript", "vue", "css", "html", "json", "bash", "yaml"],
        },
        toc: {
          depth: 5,
        },
        rehypePlugins: {
          "rehype-external-links": {
            options: {
              target: "_blank",
              rel: "noreferrer noopener",
            },
          },
          "rehype-autolink-headings": {
            options: {
              behavior: "append",
            },
          },
        },
      },
    },
  },

  sitemap: {
    exclude: ["/api/content/posts/database.sql"],
    // lastmod comes from the date of the last git commit touching each page's source
    urls: [
      withLastmod("/", "pages/index.vue"),
      withLastmod("/projects", "pages/projects/index.vue"),
      withLastmod("/me/contact", "pages/me/contact.vue"),
      withLastmod("/me/repos", "pages/me/repos.vue"),
      withLastmod("/me/songs", "pages/me/songs.vue"),
      withLastmod("/blog", "pages/blog/index.vue", "content/blog"),
      ...getBlogPosts().map((post) => withLastmod(`/blog/${post.slug}`, `content/blog/${post.slug}.md`)),
    ],
  },

  // Nesting is only used in SCSS blocks (compiled by Sass), and Nuxt 4.6 can't
  // ESM-import tailwindcss v3's `tailwindcss/nesting` subpath (NUXT_B7027).
  postcss: {
    plugins: {
      "tailwindcss/nesting": false,
    },
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

  compatibilityDate: "2026-11-13",
})
