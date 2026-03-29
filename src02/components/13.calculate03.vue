<template>
    <div>
    姓:<input type="text" v-model="firstName"><br/>
    名:<input type="text" v-model="lastName"><br/>
    </div>
    <div>全名:{{ getName ()}}</div>
    <div>全名:{{fullName}}</div>
    <button @click="changeFullName">修改计算属性</button>
</template>

<script lang='ts' setup>
 import {ref,computed} from 'vue';
    const firstName = ref('zhang');
    const lastName =ref('san');

    //自定义函数(在函数当中处理复杂逻辑，将最终的数据返回)
    function getName(){
        //return""Zhang-san";
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.substring(1) + "-" +lastName.value
    }
    
//可读可写的计算属性
let fullName =computed ({
    get(){
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
        //这个getter方法执行时机？当读取计算属性的值时，getter自动换行。
    },
    set(val){
        //这个setter方法执行时机？当修改计算属性值的时候，setter会自动执行。
        //并且setter方法的val参数会自动接收你传过来的数据。
        let [a,b] = val.split("-");
        firstName.value = a;
        lastName.value = b;
    }
});

//默认情况下计算属性是只读的，不可修改。
function changeFullName(){
    fullName.value = "jack-son";
}
</script>
   
<style scoped>
</style>