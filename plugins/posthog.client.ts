import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    capture_pageview: 'history_change', // PostHog official recommendation for Nuxt SPA
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') posthog.debug()
    },
  })

  // Track pageleave events on route changes
  const router = useRouter()
  let currentPage: string | null = null

  router.beforeEach((to, from) => {
    // Capture pageleave event when leaving a page
    if (from.fullPath && from.fullPath !== '/' && currentPage) {
      posthogClient.capture('$pageleave', {
        current_url: from.fullPath,
        next_url: to.fullPath
      })
    }
    currentPage = from.fullPath
  })

  router.afterEach((to) => {
    currentPage = to.fullPath
  })

  // Capture pageleave on browser close/refresh
  if (process.client) {
    window.addEventListener('beforeunload', () => {
      if (currentPage) {
        posthogClient.capture('$pageleave', {
          current_url: currentPage,
          event_type: 'beforeunload'
        })
      }
    })
  }

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
