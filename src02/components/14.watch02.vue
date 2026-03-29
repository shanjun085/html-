<template>
    <h3>姓名:{{ person.name }}</h3>
    <h3>年龄:{{ person.age }}</h3>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
</template>

<script lang='ts' setup>
import { ref ,watch } from 'vue';
 //监视ref定义的对象类型的数据
 let person = ref({ name: "jack", age: 20 });
 function changeName(){
    person.value.name = "lucy";
 }
 function changeAge(){
    person.value.age++;
 }
 function changePerson(){
    //默认只有这种方式可以监视到。
    //默认只监视value这个层级。
    person.value = {
        name:"tom",
        age:30
    }
 }
 //监视 ref定义的对象类型的数据。
 //这种情况下,默认是只能在整个对象改变的时候才能监视到。

//  watch(person,(newVal,oldVal)=>{
//     console.log("person被修改了",newVal,oldVal);
// },{});

//如果要监视到对象内部的name和age，需要开启深度监视
watch(person,(newVal,oldVal)=>{
    //监视器的回调执行时机是?数据已经修改完成之后执行的。
    console.log("person被修改了",newVal,oldVal);
},{deep:true});
</script>
<style scoped>
    button{
        margin-right:10px;
    }
</style>