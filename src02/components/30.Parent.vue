<template>
    <div class="parent">
        <h1>父组件</h1>
        <h2>a: {{ a }}</h2>
        <h2>b: {{ b }}</h2>

        <!-- 传递数据 -->
        <!-- v-bind="{x: 300, y: 400}" 表示将对象的所有属性绑定到 Son 标签上 -->
        <Son :a="a" :b="b" v-bind="{x: 300, y: 400}" :changeB="changeB"/>

    </div>
    
</template>

<script lang='ts' setup name="Parent">
    import { ref } from 'vue';
    import Son from './30.Son.vue';

    let a = ref(100);
    let b = ref(200);

    function changeB(val: number){
        b.value += val;
    }
</script>

<style scoped>
.parent{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(219, 240, 248);
}
</style>