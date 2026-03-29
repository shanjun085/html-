<template>
    <div class="person">
        <h3>Person组件</h3>
        <h4>姓名：{{ person.name }}</h4>
        <h4>年龄：{{ person.age }}</h4>
        <h4>城市：{{ person.address.city }}</h4>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCity">修改城市</button>
    </div>
</template>

<script lang='ts' setup name="Person">
    import { reactive, shallowReactive } from 'vue';

    // 数据
    /* let person = reactive({
        name: 'jackson',
        age: 20,
        address: {
            city: 'BeiJing'
        }
    }); */

    //注意:shallowReactive 它面向的第一层是对象中的第一级属性。
    let person = shallowReactive({
        name: 'jackson',
        age: 20,
        address: {
            city: 'BeiJing'
        }
    });

    // 方法
    function changeName(){ // reactive 和 shallowReactive 都是响应式
        person.name = 'lucy';
    }
    function changeAge(){ // reactive 和 shallowReactive 都是响应式
        person.age++;
    }
    function changeCity(){ // reactive 是响应式，shallowReactive 不是响应式
        person.address.city = 'TianJin';
    }
</script>

<style scoped>
.person {
    background-color: rgb(184, 219, 61);
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}
button {
    margin: 0 10px;
}
</style>