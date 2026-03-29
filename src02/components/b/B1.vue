<template>
    <h1>B1...</h1>
    <h2>username:{{ username }}</h2>
    <h2>age:{{ age }}</h2>
    <hr/>
    <!-- <h2>username:{{ route.query.username }}</h2>
    <h2>age:{{ route.query.age }}</h2> -->
</template>

<script lang='ts' setup>

    //导入 useRoute()函数
    import{ useRoute } from 'vue-router';

    //通过 useRoute()函数获取当前路由对象
    let route = useRoute();

    //解构
    //let {username,age} = route.query;

    defineProps(["username","age"]);
</script>

<style scoped>
</style>