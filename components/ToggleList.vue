<template>
    <UAccordion
        color="white"
        variant="outline"
        class="max-w-xs py-12 text-zinc-200"
        size="md"
        :items="[
            { 
                label: 'Getting Started', 
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
            },
            { 
                label: 'Theming', 
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
            },
            { 
                label: 'Components', 
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
            }
        ]"
    />
</template>