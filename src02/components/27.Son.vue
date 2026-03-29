<template>
    <div class="son">
        <h2>子组件</h2>
        <h3>父给了我：{{ life }}</h3>
        <button @click="acceptLove('关爱')">我应该关爱我的父</button>
    </div>
</template>

<script lang='ts' setup name="Son">
    defineProps(['life', 'acceptLove']);
</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(243, 209, 42);
}
</style>