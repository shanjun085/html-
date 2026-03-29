<!-- 子组件 -->
<template>
    <div class="person">
        <h3>姓名：{{ username }}</h3>
        <button @click="showPhone">显示联系方式</button>
        <button v-on:click="showPhone">显示联系方式</button>
    </div>
</template>

<!-- 这个如果不写，就是采用默认的文件名作为组件名
    使用setup语法糖之后，这个默认导出也不需要了。
    <script lang="ts">
    export default {
    name: "PersonVue"
</script> -->

<script lang="ts" setup name="PersonVue">
        let username ="李四";
        let phone = "18888888888";
        function showPhone (){
            alert(phone);
        }
</script>

<style scoped>
.person {
    background-color: rgb(252, 152, 80);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}
button {
    margin-right: 10px;
}
</style>