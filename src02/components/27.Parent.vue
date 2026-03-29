<template>
    <div class="parent">
        <h1>父组件</h1>
        <h2 v-if="fromSon">收到了子的：{{ fromSon }}</h2>
        <!-- 父向子传递数据：属性值是非函数 -->
        <!-- 父给子传一个函数，这样子就可以调用这个函数了。子调用这个函数可以给父传东西。-->
        <Son :life="life" :acceptLove="acceptLove"/>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import { ref } from 'vue';
    import Son from './27.Son.vue';

    // 数据
    let life = ref('生命');
    let fromSon = ref('');

    // 方法
    function acceptLove(value: string){
        fromSon.value = value;
    }
</script>

<style scoped>
.parent{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: skyblue;
}
</style>