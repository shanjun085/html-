<template>
    <div class="son">
        <h2>子组件1</h2>
        <button @click="giveMoney">给弟弟一万元</button>
    </div>
</template>

<script lang='ts' setup name="Son">
    // 重点：发送数据方一定是触发事件
    import emitter from '../utils/emitter';

    function giveMoney(){
        // 触发事件
        emitter.emit('send-money', 10000);
    }

</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(243, 209, 42);
}
</style>