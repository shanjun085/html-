<template>
    <div class="person">
        <h2>姓名：{{user.username}}</h2>
        <h2>年龄：{{user.age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" name="PersonVue" setup>
    // 导入vue框架内置的reactive函数
    //这个函数是专门对 对象 进行包裹，让对象称为响应式对象
    // ref 建议用在原始类型上， reactive 建议用在 对象类型上

    import { reactive } from 'vue';

    // 定义TS类型
    // type UserType ={
    //     username:string,
    //     age:number
    // };
        interface UserType {
            username:string,
            age: number
        };

    // 准备对象
    let user: UserType = reactive( {
        username: 'jack',
        age: 20
    });
    //reactive包裹之后，返回的 user 对象具有响应式

    // 对外暴露函数
    function changeName() {
        //底层原理：先找到 user 对应的代理对象Proxy
        //你表面上访问的是user对象的username
        //实际上底层访问的是Proxy代理对象上的username属性。
        //访问代理对象username属性的时候，底层会做两件事：
        //第一件事：修改目标对象上的username属性的值
        //第二件事：将template模板页面重新渲染。
        //基于代理的。
        user.username = '李四';
    }

    function changeAge() {
        user.age ++ ;
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