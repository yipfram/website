<script setup lang="ts">
import { projects } from "~/config/projects"

const { $prepareMeta, $applyMediumZoom } = useNuxtApp()

const title = "Projects"
const description = "Projects I built as a freelance developer, or for clients."

useHead({
  title,
  meta: $prepareMeta({
    title,
    description,
  }),
})

onMounted(() => {
  $applyMediumZoom()
})
</script>

<template>
  <PageLayout
    title="My Projects"
    description="Check out the projects I worked on!"
  >
    <section class="flex items-center flex-wrap gap-2">
      <span class="text-sm">Jump to:</span>
      <Button
        v-for="(project, index) in projects"
        :key="`skipto-button-${index}`"
        :href="`#${project.name.toLowerCase().split(' ').join('-')}`"
      >
        {{ project.name }}
      </Button>
    </section>

    <section
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      :id="project.name.toLowerCase().split(' ').join('-')"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      :class="index === 0 ? 'mt-24 mb-40' : 'my-40'"
    >
      <div class="space-y-4">
        <span
          v-if="project.client"
          class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"
        >
          {{ project.client }}
        </span>

        <span
          v-if="project.note"
          class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"
        >
          {{ project.note }}
        </span>

        <h2 class="text-4xl text-black/90 font-bold dark:text-white/90">
          {{ project.name }}
        </h2>

        <p>
          {{ project.description }}
        </p>

        <div v-if="project.buttons" class="flex flex-wrap gap-2">
          <Button
            v-for="(button, index) in project.buttons"
            :key="`button-${index}`"
            :href="button.link"
            :blank="!button.link.startsWith('/')"
          >
            <template #icon>
              <Icon v-if="button.icon" :name="button.icon" class="h-5 w-5" />
            </template>

            {{ button.text }}
          </Button>
        </div>
      </div>

      <SmartFigure
        v-if="project.image"
        :src="project.image"
        border
        :class="{ 'md:order-first': index % 2 === 0 }"
      />
    </section>
  </PageLayout>
</template>
