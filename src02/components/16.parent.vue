<template>
    <div class="parent">
    <h3>父组件</h3>
    <!-- 子组件标签 -->
    <!-- 通过props来向子组件传递数据，数据可以是静态的，也可以是动态的。-->
    <!--看不到props关键字在哪里。没有props关键字-->
    <!-- props表示通过多个属性传递数据。-->
    <!-- <Son name="jack" :age="age" :list="personList"></Son> -->
    <Son name="jack" :age="age" ></Son>
    </div>
</template>

<script lang='ts' setup>
    // import { ref,reactive } from 'vue';
    import { ref, } from 'vue';
    import Son from './16.son.vue';

    let age = ref(20);

    // let personList = reactive([
    //     {id:1,name:"jack",age:20},
    //     {id:1,name:"lucy",age:30},
    //     {id:1,name:"tom",age:40},
    // ])
</script>

<style scoped>
    .parent {
        background-color: aquamarine;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>