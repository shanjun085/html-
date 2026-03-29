<template>
    <div class="person">
        <h3>Person组件</h3>
        <h4>计数器：{{ count }}</h4>
        <h4>姓名：{{ person.name }}</h4>
        <h4>年龄：{{ person.age }}</h4>
        <button @click="add">计数器加1</button>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang='ts' setup name="Person">
    import { ref, shallowRef } from 'vue';

    // 数据
    /* let count = ref(0);
    let person = ref({
        name: 'jackson',
        age: 20
    }); */

    let count = shallowRef(0);
    let person = shallowRef({
        name: 'jackson',
        age: 20
    });

    // 方法
    function add(){ // ref 和 shallowRef 都是响应式
        count.value++;
    }
    function changeName(){ // ref是响应式，shallowRef不是响应式
        person.value.name = 'lucy'; 
    }
    function changeAge(){ // ref是响应式，shallowRef不是响应式
        person.value.age++;
    }
    function changePerson(){ // ref 和 shallowRef 都是响应式
        person.value = {
            name: 'king',
            age: 30
        };
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