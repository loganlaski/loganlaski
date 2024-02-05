<template>
  <div class="relative isolate overflow-hidden lg:overflow-visible">
    <div class="mx-auto">
      <div class="h-full">
        <div id="page" class="p-4">
          <Main />
          <Projects />
          <Contact />
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