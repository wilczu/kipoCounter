!<template>
    <div class="bg-gray-50 dark:bg-gray-800 hover:bg-pink-600 transition-all hover:text-white rounded border border-pink-600">
        <a :href="url" target="_blank">
            <div class="flex justify-between">
                <div class="p-4"><span class="tracking-widest"> {{ title }} </span></div>
                <div class="bg-pink-600 text-white p-4">
                    Go there
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'link-comp',
    props: {
        title: {
            required: true,
            type: String,
        },
        url: {
            required: true,
            type: String,
        }
    }
}
</script>