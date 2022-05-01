<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'header-comp',
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>