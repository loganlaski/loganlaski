<template>
    <div class="component mt-3">
        <ul class="block">
            <li v-for="link in contactLinks">
                <a :href="link.href" target="_blank" class="hover:opacity-75">
                    {{ link.item }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const contactLinks = [
    {
        id: 0,
        item: 'Email',
        href: 'mailto:logan.laski@gmail.com',
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