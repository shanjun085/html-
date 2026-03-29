<template>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
</template>

<script lang='ts' setup name="PersonInfo">
    import { reactive, watch } from 'vue';

    // 数据
    let person = reactive({
        name: 'jack',
        age: 18
    });

    // 方法
    function changeName(){
        person.name += '*';
    }
    function changeAge(){
        person.age++;
    }
    function changePerson(){
        Object.assign(person, {name: 'lucy', age: 22});
    }

    // 监视
    watch(person, (newVal, oldVal)=>{
        console.log('person被修改了', newVal, oldVal);
    }, {deep: false}); // 无法关闭深度监视
</script>

<style scoped>
    button {
        margin: 0 5px;
    }
</style>