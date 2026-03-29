<template>
    <div class="parent">
    <h3>父组件</h3>
    <button @click="getParentH3">获取parentH3</button>
        <!-- ref="mySon" 用它标记这个组件，将来通过 mySon 来获取组件实例。-->
    <Son ref="mySon"></Son>
    <button @click="getMySon">获取子组件Son的实例</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
    import Son from './15.son.vue';

    let myBtnSon = ref ();

    //别忘记这一行代码
    let mySon = ref ();

    function getParentH3(){
        console.log("dom元素", myBtnSon.value);
    }

    function getMySon(){
        //console.log("Son组件实例",mySon.value);
        console.log(mySon.value.username);
        console.log(mySon.value.user);
        mySon.value.user.age =100;
        mySon.value.myFun();
    }
</script>

<style scoped>
    .parent {
        background-color: aquamarine;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>