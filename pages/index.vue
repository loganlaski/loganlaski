<template>
  <div class="relative isolate overflow-hidden lg:overflow-visible">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-0 -top-4 h-[150rem] w-full stroke-zinc-400 dark:stroke-zinc-200 [mask-image:radial-gradient(100rem_160rem_at_bottom,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="120" height="120" x="100%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div class="mx-auto">
      <div class="h-[100vh]">
        <div id="page" class="p-4">
          <Main />
          <Projects />
          <Contact />
        </div>
      </div>

      <!-- <div class="hidden -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Logan Laski',
  ogTitle: 'Logan Laski',
  description: 'Creative technologist based in Madison, WI.',
  ogDescription: 'Creative technologist based in Madison, WI.',
})
</script>