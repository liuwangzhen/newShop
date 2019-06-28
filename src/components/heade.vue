<template>
    <div>
    <div>{{msg}}</div>
    <slot name="one"></slot>

    </div>
</template>

<script>
    export default {
        name: "heade",
        props:{
            msg: String,
        }
    }
</script>

<style>

</style>