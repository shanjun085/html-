<template>
    <div class="parent">
        <h1>父组件</h1>
        <h4>账户余额：{{ balance }}元</h4>
        <h4>房子：面积{{ house.area }}平方米，位置：{{ house.location }}</h4>
        <Son/>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import { provide, reactive, ref } from 'vue';
    import Son from './32.Son.vue';

    // 数据
    let balance = ref(10000);
    let house = reactive({
        area: 100,
        location: '北京海淀X小区'
    });

    // 方法
    function changeBalance(value: number){
        balance.value -= value;
    }

    // 提供数据
    provide('balance' , balance); // 千万不要 balance.value，如果.value传递过去的数据就不是响应式的了。
    provide('house', house);
    provide('changeBalance', changeBalance);
</script>

<style scoped>
.parent{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(219, 240, 248);
}
</style>