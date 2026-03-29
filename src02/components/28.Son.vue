<template>
    <div class="son">
        <h2>子组件</h2>
        <!-- 以下代码表示当鼠标事件发生之后，触发 get-love 事件，触发事件的同时传递 '关爱' 数据 -->
        <!-- $event 是固定写法，表示当前事件对象 -->
        <button @click="emit('get-love', '关爱', $event)">我应该关爱我的父</button>
    </div>
</template>

<script lang='ts' setup name="Son">

    // 宏函数：defineEmits() 可以用来声明/定义事件
    // 以下代码表示定义一个 get-love 事件
    const emit = defineEmits(['get-love']);

</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(243, 209, 42);
}
</style>