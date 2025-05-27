<script setup lang="ts">
const cards = [
  {
    title: "Blog",
    href: "/blog",
    icon: "line-md:document-list",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: "line-md:cog",
  },
  {
    title: "Code",
    href: "/me/repos",
    icon: "line-md:github",
  },
  {
    title: "Contact",
    href: "/me/contact",
    icon: "line-md:at",
  },
]

useHead({
  title: "Home",
})
</script>

<template>
  <div
    class="md:min-h-[calc(100vh-11rem)] flex flex-col my-24 md:my-0 items-center justify-center container mx-auto"
  >
    <div class="flex items-center gap-8">
      <div
        class="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-5"
      >
        <SquaresBackground
          :speed="0.3"
          :square-size="40"
          class="w-full h-full"
        />
      </div>

      <div class="hidden md:flex flex-col gap-4 w-2/12 z-10">
        <Card
          v-for="(card, index) in cards.slice(0, 2)"
          :key="`card-ml-${index}`"
          :title="card.title"
          :href="card.href"
          class="w-28 flex items-center justify-center transform hover:scale-105 transition-all dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]"
          :class="{
            'ml-auto': index % 2 === 0,
            'rotate-2': index === 0,
            '-rotate-3': index === 2,
          }"
          :style="{
            aspectRatio: '1/1',
          }"
        >
          <template #title>
            <div class="flex flex-col gap-2 items-center">
              <Icon :name="card.icon" class="h-8 w-8" />
              {{ card.title }}
            </div>
          </template>
        </Card>
      </div>

      <header class="flex-1 z-10">
        <div class="space-y-8 z-10">
          <div class="space-y-4">
            <h1
              class="font-semibold text-center text-lg text-black/50 dark:text-white/50 md:text-xl"
            >
              Hi, I am
              <span
                class="text-black/80 select-none dark:text-white/90 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-full align-middle py-2.5 pl-3 pr-4 gap-1 inline-flex items-center w-max font-medium"
              >
                <!-- <SmartImage
                  src="/assets/images/memoji.png"
                  class="object-cover h-7 w-7"
                /> -->
                Romain ROCHAS</span
              >
              a
            </h1>

            <h1
              class="font-semibold text-center text-5xl text-black/90 dark:text-white/90 md:text-6xl mt-10"
            >
              French business student
            </h1>
          </div>
        </div>

        <div class="mt-10">
          <a href="https://linkedin.com/in/romain-rochas" target="_blank" rel="noopener noreferrer">
            <h1
              class="font-semibold text-center text-lg text-black/50 dark:text-white/50 md:text-xl"
            >
              Studying @
              <span class="group relative bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-full align-middle py-3 pl-4 pr-5 gap-2 inline-flex items-center w-max font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-400/20 hover:scale-105 cursor-pointer">
                <!-- Animated gradient border -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

                <!-- Logo container with hover effects -->
                <div class="relative overflow-hidden rounded-md">
                  <SmartImage
                    src="/assets/images/school/emlyon-logo.svg"
                    class="object-cover h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    alt="Emlyon Business School"
                  />
                  <!-- Shine effect on hover -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>

                <!-- School name with typing animation -->
                <span class="text-sm font-semibold text-black/70 dark:text-white/70 group-hover:text-red-600 dark:group-hover:text-white transition-colors duration-300">
                  Emlyon
                </span>

                <!-- Study year indicator -->
                <div class="flex items-center gap-1">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <span class="text-xs text-black/50 dark:text-white/50 font-medium">M2</span>
                </div>
              </span>
            </h1>
          </a>
        </div>

        <div
          class="mt-8 flex items-center justify-center gap-x-3 gap-y-2 flex-wrap"
        >
          <Icon
            v-for="item in [
              { name: 'TypeScript', icon: 'devicon:typescript' },
              { name: 'React.js', icon: 'devicon:react' },
              { name: 'HTML5', icon: 'devicon:html5' },
              { name: 'Linux', icon: 'devicon:linux' },
              { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
              { name: 'Node.js', icon: 'devicon:nodejs' },
            ]"
            v-tippy="{ content: item.name, placement: 'bottom' }"
            :key="`skill-icon-${item.name}`"
            :name="item.icon"
            :class="{
              'h-[22px] w-[22px]': item.name === 'Node.js',
              'h-[25px] w-[25px]': ['HTML5', 'TypeScript'].includes(item.name),
              'h-7 w-7': !['TypeScript', 'Node.js', 'HTML5'].includes(
                item.name,
              ),
            }"
          />
        </div>
      </header>

      <div class="hidden md:flex flex-col gap-4 w-2/12 z-10">
        <Card
          v-for="(card, index) in cards.slice(2, 6)"
          :key="`card-mr-${index}`"
          :title="card.title"
          :href="card.href"
          class="w-28 flex items-center justify-center transform hover:scale-105 transition-all dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]"
          :class="{
            'ml-auto': index % 2 !== 0,
            '-rotate-2': index === 0,
            'rotate-3': index === 2,
          }"
          :style="{
            aspectRatio: '1/1',
          }"
        >
          <template #title>
            <div class="flex flex-col gap-2 items-center">
              <Icon :name="card.icon" class="h-8 w-8" />
              {{ card.title }}
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="grid md:hidden grid-cols-2 gap-4 w-full mt-24 z-10">
      <Card
        v-for="(card, index) in cards"
        :key="`card-m-${index}`"
        :title="card.title"
        :href="card.href"
        class="w-full flex items-center justify-center dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]"
        :style="{
          aspectRatio: '1/1',
        }"
      >
        <template #title>
          <div class="flex flex-col gap-2 items-center">
            <Icon :name="card.icon" class="h-8 w-8" />
            {{ card.title }}
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
