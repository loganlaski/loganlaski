<template>
    <div class="component mt-3">

        <ul class="block">
            <li v-for="link in navLinks" class="nav-item flex justify-between">
                <NuxtLink :to="link.href" class="hover:opacity-75">
                    {{ link.item }}
                    <span class="sr-only">
                        {{ link.description }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const navLinks = [
    {
        id: 0,
        item: 'Explore recent work',
        // description: '',
        href: '/work',
        // icon:""
    },
    {
        id: 1,
        item: 'Send me a message',
        // description: '',
        href: '/contact',
        // icon:""
    },
]
</script>