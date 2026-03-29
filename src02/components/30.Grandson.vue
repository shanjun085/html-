<template>
    <div class="grandson">
        <h2>孙组件</h2>
        <h2>b: {{ b }}</h2>
        <h2>x: {{ x }}</h2>
        <h2>y: {{ y }}</h2>
        <!-- 通过这种方式可以完成 孙 向 祖 传递数据。 -->
        <button @click="changeB(10)">修改爷爷组件中的b</button>
    </div>
</template>

<script lang='ts' setup>
    defineProps(['b', 'x', 'y', 'changeB']);
</script>

<style scoped>
.grandson{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(108, 203, 246);
}
</style>