<template>
    <h1>B...</h1>
    <!--准备两个超链接-->
    <!--也可以使用 router-link 标签-->
    <!--<router-link to=""></router-link> -->
    <RouterLink :to="{ path: '/b/b1', query: { username, age } }">B1 PAGE</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <!-- <RouterLink to="/b/b2">B2 PAGE</RouterLink> -->
    <hr>
    <!-- 使用query参数传参数的第一种写法 -->
    <RouterLink :to="`/b/b1?username=${username}&age=${age}`">B1 PAGE</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <!-- 使用query参数传参数的第二种写法 -->
    <RouterLink :to="{path:'/b/b1',query:{username, age}}">B1 PAGE</RouterLink>
    <hr>
    <!--也可以使用 router-view 标签-->
    <!--<<router-view></router-view>-->

    <!--通过params传参的第一种方式-->
    <RouterLink :to="`/b/b2/${username}/${age}`">B2 PAGE</RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <!--通过params传参的第二种方式,只支持name形式-->
    <RouterLink  replace :to="{name:'b2',params:{ username,age }}">B2 PAGE2</RouterLink>
    <!-- <RouterView name="需要指定是哪个路由，这里编写的是路由的名字"></RouterView> -->
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="goB2(username, age)">跳转到B2</button>
    <RouterView></RouterView>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
let username = ref("jackson");
let age = ref(20);
let router = useRouter();

function goB2(username:string, age:number){
    //跳转，编程式跳转
    router.push({name: 'b2',params:{username,age}});
}
</script>
<style scoped>
</style>