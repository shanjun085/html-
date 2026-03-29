<template>
    <div>
        <h2>姓名：{{ person.name }}</h2>
        <h2>所在城市：{{ person.address.city }}</h2>
        <h2>所在街道：{{ person.address.street }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeCity">修改城市</button>
        <button @click="changeStreet">修改街道</button>
        <button @click="changeAddress">修改整个地址</button>
    </div>
</template>

<script lang='ts' setup name='PersonInfo'>
    import { reactive, watch } from 'vue';

    // 数据
    let person = reactive({
        name: '张三',
        address: {
            city: '北京',
            street: '朝阳街道'
        }
    });

    // 方法
    function changeName() {
        person.name = '李四';
    }
    function changeCity() {
        person.address.city = '南京';
    }
    function changeStreet() {
        person.address.street = '中山街道';
    }
    function changeAddress() {
        person.address = {
            city: '上海',
            street: '梧桐街道'
        };
    }

    // 监视响应式对象的基本类型属性时，需要提供一个getter函数。
    watch(() => person.name, (newVal, oldVal)=>{
        console.log('person.name被修改了', newVal, oldVal);
    });

    // 监视响应式对象的对象类型属性时，直接编写对象是可以的，但对象内部属性变化时可以监视到，对象被整体替换时不会被监视到。
    //  watch(person.address, (newVal, oldVal)=>{
    //     console.log('person.address被修改了', newVal, oldVal);
    // }); 

    // 监视响应式对象的对象类型属性时，提供一个getter函数的话，对象被整体替换时会被监视到，对象内部的属性变化时不会被监视到。
    //  watch(() => person.address, (newVal, oldVal)=>{
    //     console.log('person.address被修改了', newVal, oldVal);
    // }); 

    // 监视响应式对象的对象类型属性时的最终建议：提供一个getter函数，开启深度监视。
    // 这样对象内部属性变化时，以及对象被整体替换时，都会被监视到。
     watch(() => person.address, (newVal, oldVal)=>{
         console.log('person.address被修改了', newVal, oldVal);
     }, {deep: true});
</script>

<style scoped>
    button{
        margin: 0 5px;
    }
</style>