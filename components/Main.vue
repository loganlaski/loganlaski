<template>
    <div id="component" class="p-5">
        <div class="block">
            <h1>
                Logan Laski
            </h1>

            <h1>
                Creative technologist based in Madison, WI.
            </h1>

            <h1>
                Focused on building modern digital products.
            </h1>

            <h1 class="mt-4">
                Currently working on:
            </h1>

            <div v-for="link in projectLinks">
                <a :href="link.href" target="_blank" class="hover:opacity-75">
                    {{ link.item }}
                </a>
            </div>

            <ul class="block mt-4">
                <li v-for="link in contactLinks">
                    <a :href="link.href" target="_blank" class="hover:opacity-75">
                        {{ link.item }}
                    </a>
                </li>
            </ul>

            <!-- <div id="image-container" class="block md:max-w-[27rem] h-auto lg:-mt-24 lg:mt-0">
                <img src="@/assets/img/hero-bg.jpg" id="hero-image" alt="LRL design">
            </div> -->
        </div>
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
const contactLinks = [
    {
        id: 0,
        item: 'Email',
        href: 'mailto:loganrlaski@gmail.com',
    },
    {
        id: 1,
        item: 'GitHub',
        href: 'https://github.com/loganlaski',
    },
    {
        id: 2,
        item: 'Instagram',
        href: 'https://instagram.com/loganlaski',
    },
    {
        id: 3,
        item: 'Threads',
        href: 'https://www.threads.net/@loganlaski',
    },
    {
        id: 4,
        item: 'Read.cv',
        href: 'https://read.cv/lrl.online',
    },
]
</script>

<style>
* {
    font-size: 1rem;
    line-height: 120%;
}
h1, p {
    pointer-events: none;
}
</style>