<template>
    <div>
        <h3>姓名：{{ name }}</h3>
        <h3>年龄：{{ age }}</h3>
        <h3>年龄：{{ myAge }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeMyage">修改年龄2</button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRef, toRefs } from 'vue';


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
    // 会从person对象中提取出来age属性，并且可以保证提取出来的age属性仍然具有响应式
    //提取出来age属性回合原对象的属性保持链接(响应式连接)
    let myAge = toRef(person, 'age');

    function changeMyage(){
        myAge.value++;
    }
</script>

<style scoped>
 button {
    margin-right: 10px;
 }
</style>