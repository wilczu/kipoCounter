<template>
    <router-link :to="link" class="w-1/5 mx-auto text-black dark:text-white">
        <button class="inline-flex items-center hover:-translate-x-2 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span class="px-1 text-2xl">Go back</span>
        </button>
    </router-link>
</template>
<script>
export default {
    name: 'goBack-comp',
    props: {
        link: {
            type: String,
            required: true,
        }
    }
}
</script>