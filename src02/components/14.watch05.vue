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

<script lang='ts' setup>
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

    // 监视
    //注意 newVal 和 oldVal 的值。
    //它本质上就是被监视的对象。
    //以下代码中被监视的对象是一个数组。
    //因此 newVal 和 oldVal 是一个数组。
    watch([() => person.name, () => person.address.street], (newVal, oldVal)=> {
        console.log('数据被修改了', newVal, oldVal);
    });
    
</script>

<style scoped>
    button{
        margin: 0 5px;
    }
</style>