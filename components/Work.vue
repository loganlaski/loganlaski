<template>
    <div class="component mt-3">
        <!-- <h1> -->
            <!-- Recent work: -->
        <!-- </h1> -->
        <!-- <NuxtLink to="/" class="hover:opacity-75">
            Go back to home page
        </NuxtLink> -->

        <ul class="block mt-4">
            <li v-for="project in projectLinks.slice(4, 8)" class="project-item flex flex-col">
                <!-- <img :src="link.image" /> -->
                
                <a :href="project.href" target="_blank" class="hover:opacity-75 flex flex-col my-4 py-2 gap-y-2 border-t-2 dark:border-white/25 border-black/25">
                    {{ project.item }}
                    <img :src="project.imageSrc" :alt="project.imageAlt" class="object-center w-[44rem] rounded-md" />
                </a>
                
                <!-- <div class="project-image h-56 w-72"></div> -->
                <!-- <NuxtLink to="/project" class="hover:opacity-75">
                    {{ link.item }}
                </NuxtLink> -->

                <!-- <p>
                    {{ link.desc }}
                </p> -->

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
        // imageSrc: 'img/glassleaf_2x.webp',
        // imageAlt: "Glassleaf Golf",
        // image:""
    },
    {
        id: 4,
        item: 'Shopbop website (project work with Shopbop/Amazon)',
        // description: '',
        href: 'https://shopbop.com',
        // imageSrc: 'img/glassleaf_2x.webp',
        imageSrc:"img/work_shopbop-project.png",
        imageAlt: "Logan Laski recent content development work for Shopbop/Amazon.",
    },
    {
        id: 5,
        item: 'Living Designs Furniture (project work with Baal + Spots)',
        // description: '',
        href: 'https://livingdesignsfurniture.com',
        imageSrc:"img/work_ldf-baal-spots-project.png",
        imageAlt: "Logan Laski recent development work for Baal + Spots.",
    },
    {
        id: 6,
        item: 'Avidian Wealth Solutions (project work with Baal + Spots)',
        // description: '',
        href: 'https://avidianwealth.com',
        imageSrc:"img/work_avidian-baal-spots-project.png",
        imageAlt: "Logan Laski recent development work for Baal + Spots.",
    },
    {
        id: 7,
        item: 'Valt Defense (concept design for freelance project)',
        // description: '',
        href: 'https://valt-landing-page.vercel.app',
        imageSrc:"img/work_valt-freelance-project.png",
        imageAlt: "Logan Laski recent freelance work for Valt Defense.",
    },

]
</script>