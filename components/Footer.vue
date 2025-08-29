<script setup lang="ts">
const route = useRoute()

/**
 * Returns GitHub notice string.
 * @returns {string}
 */
const getLocalizedNotice = computed((): string => {
  return "This website is open-source on GitHub"
})
</script>

<template>
  <div
    class="bg-gray-100 text-sm w-full py-4 text-black/50 dark:bg-white/5 dark:text-white/30"
  >
    <div class="responsive-screen">
      <div class="space-y-4 text-center sm:space-y-0 sm:space-x-6 sm:text-left">
        <SmartLink
          href="https://github.com/eggsy/website"
          class="text-center border-b border-transparent hover:border-black/10 dark:hover:border-white/10 transition-colors"
          blank
        >
          {{ getLocalizedNotice }}
        </SmartLink>
      </div>
    </div>
  </div>
</template>
