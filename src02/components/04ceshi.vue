<template>
    <div class="person">
        <!-- 这里不需要加.value，因为底层会自动.value -->
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" name="PersonInfo" setup>
//导入vue框架的ref函数
//ref函数的作用是：让数据具有响应式效果。
//语法：ref(数据)
//注意：一般情况下我们会使用ref函数包裹原始数据类型。
    import { ref } from 'vue';
/*默认情况下，这个数据是没有响应式效果
let username = "李四"
let age = 0
*/

//username和age两个变量就具有响应式了。
//ref()函数包裹原始数据类型之后，返回值是:RefImpl对象
//真正完成响应式效果的是:RefImpl对象。
//RefImpl对象内部有一个value属性，这个value属性储存了原始数据。
//底层是基于setter方法的。
    let name = ref('张三');
    let age = ref(20);
    let tel = '13000000000';

    function changeName(){
        // 用ref包裹的数据是一个RefImpl对象，操作数据时一定要加.value
        //在上面差值语法，模板不需要手动.value，模板会自动.value

        //ref()函数包裹的原始类型的数据
        //在script脚本中使用的时候，统一要添加".value"属性。
        //不管读还是写，都需要.value属性
        name.value = '李四';
    }
    function changeAge(){
        age.value ++ ;
    }
    function showTel(){
        alert(`手机号：${tel}`);
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
    button {
        margin: 0 5px;
    }
</style>