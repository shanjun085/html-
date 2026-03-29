<template>
    <div class="grandson">
        <h3>孙组件</h3>
        <h4>爷爷的钱我继承了：{{ balance }}元</h4>
        <h4>爷爷的房子我继承了，房子面积：{{ house.area }}平方米，位置：{{ house.location }}</h4>
        <button @click="changeBalance(100)">我要花爷爷100元</button>
    </div>
</template>

<script lang='ts' setup name="Grandson">
    import { inject } from 'vue';

    // 注入数据
    let balance = inject('balance', '第二个参数是默认值');
    let house = inject('house', { area: 0, location: ''}); // 使用第二个对象参数作为对象属性的自动推断。用来解决上面的报错问题。
    let changeBalance = inject('changeBalance', (x: number)=> x); // 第二个参数仍然是默认值，解决编译报错问题。
</script>

<style scoped>
.grandson{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(215, 239, 121);
}
</style>