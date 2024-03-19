<template>
  <div class="relative isolate overflow-hidden lg:overflow-visible">
    <div class="mx-auto">
      <div class="h-full">
        <div id="page" class="py-4 pl-6 pr-2">
          <Main />
          <Projects />
          <Contact /> 

          <!-- <ToggleList /> -->

        </div>
      </div>
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