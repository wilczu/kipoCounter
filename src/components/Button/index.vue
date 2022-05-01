<template>
    <button class="bg-pink-500 text-white px-6 py-3 rounded"> {{ title }} </button>
</template>
<script>
export default {
    name: 'select-comp',
    props: {
        title: {
            required: true,
            type: String
        }
    }
}
</script>