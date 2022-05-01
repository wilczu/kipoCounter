<template>
    <div class="relative bottom">
        <div class="flex justify-between navigation">
            <div class="flex gap-2 nav-item">
                <div class="hover:underline">
                    <a href="https://github.com/wilczu/kipoCounter">
                        <span class="hover:underline">Github</span>
                    </a>
                </div>
                <router-link to="/info" class="hover:underline">Info</router-link>
            </div>
            <div class="nav-item">
                <a href="https://wilchu.net">
                    <span class="hover:underline">Created by 🐺 Wilchu</span>
                </a>
            </div>
            <div class="flex gap-2 nav-item">
                <router-link to="/settings" class="hover:underline">Settings</router-link>
                <router-link to="/links" class="hover:underline">Useful links</router-link>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'footer-comp',
}
</script>

<style>
    .navigation {
        @apply bg-pink-600 text-white p-4;
    }
</style>