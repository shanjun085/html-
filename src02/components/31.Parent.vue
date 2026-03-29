<template>
    <div class="parent">
        <h1>父组件</h1>
        <h4>账户余额：{{ balance }}</h4>
        <button @click="giveFirst(1000)">给老大1000</button>
        <button @click="giveSecond(2000)">给老二2000</button>
        <!-- $refs 是内置的直接用，包含所有被ref属性表示的DOM元素或组件实例 -->
        <button @click="giveFirstAndSecond($refs,3000)">分别给老大和老二3000</button>
        <Son1 ref="s1"></Son1>
        <br>
        <Son2 ref="s2"></Son2>
    </div>
    
</template>

<script lang='ts' setup name="Parent">
    import { ref } from 'vue';
    import Son1 from './31.Son01.vue';
    import Son2 from './31.Son02.vue';

    // 数据
    let balance = ref(10000);
    let s1 = ref();
    let s2 = ref();

    // 方法
    function giveFirst(value: number){
        //将自己的钱减去value
        balance.value -= value;
        // s1.value 代表子组件
        s1.value.balance += value;
    }

    function giveSecond(value: number){
        balance.value -= value;
        s2.value.balance += value;
    }

    function giveFirstAndSecond(refs: any, value: number){
        balance.value -= value * 2;
        for (const key in refs) {
            // refs[key] 是代表其中的一个子组件
            refs[key].balance += value;
        }
    }

    // 对外暴露数据
    defineExpose({balance});
</script>

<style scoped>
.parent{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(219, 240, 248);
}
button {
    margin: 10px 10px;
}
</style>