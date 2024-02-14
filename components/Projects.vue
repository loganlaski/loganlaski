<template>
    <div class="component mt-3">
        <h1>
            Currently working on:
        </h1>

        <ul class="block">
            <li v-for="link in projectLinks" class="project-item bg-teal-900 my-4 p-3 flex justify-between max-w-xl">
                <!-- <a :href="link.href" target="_blank" class="hover:opacity-75">
                    {{ link.item }}
                </a> -->
                <NuxtLink to="/project" class="hover:opacity-75">
                    {{ link.item }}
                </NuxtLink>

                <!-- <p>
                    {{ link.desc }}
                </p> -->

                <div class="project-image h-56 w-72 bg-green-200">
    
                </div>
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
    },
    {
        id: 1,
        item: 'OrderBlock',
        // description: '',
        href: 'https://orderblock.app',
    },
    {
        id: 2,
        item: 'Free days Studio',
        // description: '',
        href: 'https://freedays.studio',
    },
    {
        id: 3,
        item: 'Glassleaf Golf',
        // description: '',
        href: 'https://glassleaf.app',
    },
]
</script>