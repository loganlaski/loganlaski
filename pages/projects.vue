<template>
  <div class="relative isolate overflow-hidden lg:overflow-visible">
    <div class="mx-auto">
      <div class="h-full">
        <div id="page" class="py-4 px-6">
          <Main />
          <Projects />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// addRouteMiddleware()
definePageMeta({
    middleware: ['demo'],
})

useSeoMeta({
  title: 'Logan Laski — projects',
  ogTitle: 'Logan Laski — projects',
  description: 'Modern web design and application development.',
  ogDescription: 'Modern web design and application development.',
})
</script>