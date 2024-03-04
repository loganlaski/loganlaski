<template>
    <div class="component mt-3">
        <h1>
            Recent work:
        </h1>

        <ul class="block">
            <li v-for="link in projectLinks.slice(0, 4)" class="project-item flex justify-between">
                <a :href="link.href" target="_blank" class="hover:opacity-75">
                    {{ link.item }}
                </a>
                
                <!-- <NuxtLink to="/project" class="hover:opacity-75">
                    {{ link.item }}
                </NuxtLink> -->

                <!-- <p>
                    {{ link.desc }}
                </p> -->

                <!-- <div class="hidden project-image h-56 w-72 bg-green-200"></div> -->
            </li>

        </ul>
    </div>
</template>

<script setup>
const projectLinks = [
    {
        id: 0,
        item: 'lrl-design',
        // description: '',
        href: 'https://lrl.design',
        // image:""
    },
    {
        id: 1,
        item: 'orderblock-app',
        // description: '',
        href: 'https://orderblock.app',
        // image:""
    },
    {
        id: 2,
        item: 'freedays-studio',
        // description: '',
        href: 'https://freedays.studio',
        // image:""
    },
    {
        id: 3,
        item: 'glassleaf-app',
        // description: '',
        href: 'https://glassleaf.app',
        // image:""
    },
]
</script>