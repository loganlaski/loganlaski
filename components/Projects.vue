<template>
    <div class="component my-4">
        <h1>
            Currently working on:
        </h1>

        <ul class="block">
            <li v-for="link in projectLinks">
                <a :href="link.href" target="_blank" class="hover:opacity-75">
                    {{ link.item }}
                </a>
           </li>
        </ul>
    </div>
</template>

<script setup>
const projectLinks = [
    {
        id: 0,
        item: 'lrl-design',
        href: 'https://lrl.design',
    },
    {
        id: 1,
        item: 'glassleaf-app',
        href: 'https://glassleaf.app',
    },
    {
        id: 2,
        item: 'orderblock-app',
        href: 'https://orderblock.app',
    },
    {
        id: 3,
        item: 'freedays-studio',
        href: 'https://freedays.studio',
    },
]
</script>