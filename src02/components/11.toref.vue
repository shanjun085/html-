<template>
    <div>
        <h3>姓名：{{ name }}</h3>
        <h3>年龄：{{ age }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue';


    //toRefs 和 toRef
    //创建响应式对象
    const person = reactive({name:"jack",age:20});

    //解构(name和age还具有响应式么？默认情况下是不再具有响应式了)
    //let {name,age} = person;

    let {name, age} =toRefs(person);
    //定义方法
    function changeName() {
        name.value = "lucy";
    }
    function changeAge() {
        age.value++;
    }
</script>

<style scoped>
 button {
    margin-right: 10px;
 }
</style>