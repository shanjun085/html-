<template>
    <h1>B2...</h1>
    <h2>username:{{ route.params.username }}</h2>
    <h2>age:{{ route.params.age }}</h2>

    <h2>username:{{ username }}</h2>
    <h2>age:{{ age }}</h2>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
defineProps(["username","age"]);
</script>

<style scoped>
</style>