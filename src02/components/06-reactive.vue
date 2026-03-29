<template>
    <div class="person">
        <h2>姓名：{{user.username}}</h2>
        <h2>年龄：{{user.age}}</h2>
        <h3>城市: {{user.address.city  }}</h3>
        <h3>街道: {{ user.address.street }}</h3>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCity">修改城市</button>
        <button @click="changeStreet">修改街道</button>
    </div>
</template>

<script lang="ts" name="PersonVue" setup>
    import { reactive } from 'vue';

    //reactive 包过的原始类型数据，没有响应式效果
    //编译报错.reactive函数只支持 对象，不支持原始类型。
    //let count = reactive(0);


// reactive是支持深层次响应式的。
    let user = reactive( {
        username: 'jack',
        age: 20,
        address:{
            city:"天津",
            street:"北辰"
        }
    });


    function changeName() {
        //reactive 包裹的对象在访问属性的时候，不需要.value(压根没有 .value 属性)
        user.username = '李四';
    }

    function changeAge() {
        user.age ++ ;
    }

    let changeCity = () => {
        user.address.city="北京"
    }

    let changeStreet = () =>{
        user.address.street="海淀"
    }
</script>

<style scoped>
    .person {
        background-color: sandybrown;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
    button {
        margin: 0 5px;
    }
</style>
