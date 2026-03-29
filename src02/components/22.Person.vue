<template>
    <!--编写两个超链接，用来发送请求。用户点击超链接走某个路由-->
    <RouterLink to="/a">A PAGE</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink :to="{path: '/a'}">A PAGE（to的编写）</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink :to="{name: 'a'}">A PAGE（name属性）</RouterLink>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/b">B PAGE</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink :to="{path: '/b'}">B PAGE（to的编写）</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink :to="{name: 'b'}">B PAGE（name属性）</RouterLink>
    <hr>
    <!--指定路由的出口，不是必须写到这里的，可以写到其他的xxx.vue文件中-->
    <RouterView></RouterView>
</template>

<script lang="ts" setup>
</script>
<style scoped>
</style>

//主要步骤
// npm i vue-router
// 编写两个超链接
// 编写路由出口
// 编写两个子组件 A.vue B.vue
// 编写路由器
// app.use(router)