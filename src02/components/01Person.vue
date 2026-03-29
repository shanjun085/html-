<!-- 子组件 -->
<template>
    <div class="person">
        <!--差值语法：Vue提供的专属语法，格式:{{ steup函数对外暴露的对象的属性的名字 }}-->
        <h3>姓名：{{ username }}</h3>
        <!--点击这个按钮出发一个事件：click事件，事件触发之后执行一个函数。函数去显示联系方式-->
        <!--绑定时间的语法有两种：第一种：@click，第二种：v-on:click-->
        <button @click="showPhone">显示联系方式</button>
    </div>
</template>

<!-- 一般在script中定义数据，并且暴露数据给 template -->
<script lang="ts">
export default {
    name: "PersonVue",
    // 最核心的setup函数
    // VUE要求所有的代码要编写到setup函数中。
    // 在当前组件初始化的时候，自动调用。（组件只初始化一次，因此setup只执行一次）
    // 在setup函数中完成组件状态的管理、生命周期的管理，以及数据的暴露。
    setup(){
        // 准备数据(以下代码可以指定类型，也可以不指定类型。因为TS有类型自动推断)
        let username ="李四";
        let phone = "18888888888";
        
        //定义函数
        function showPhone (){
            alert(phone);
        }

        //暴露这个数据
        //必须暴露的是对象
        return {
            //暴露数据
            username: username,
            //暴露函数
            showPhone: showPhone
        
        //setup函数返回值除了可以返回对象之外，还可以直接返回一个函数。
        //这个函数我们称其为：渲染函数。
        }
    }
}
</script>

<style scoped>
.person {
    background-color: rgb(252, 152, 80);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}
</style>