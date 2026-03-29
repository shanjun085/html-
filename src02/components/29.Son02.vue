<template>
    <div class="son">
        <h2>子组件2</h2>
        <h3 v-if="money">哥哥给了我{{ money }}元</h3>
    </div>
</template>

<script lang='ts' setup name="Son">
    // 重点：接收数据方一定是绑定事件
    import { ref } from 'vue';
    import emitter from '../utils/emitter';
import { onUnmounted } from 'vue';

    // 数据
    let money = ref();

    // 绑定事件
    emitter.on('send-money', (value)=>{
        money.value = value;
    });

    //当前组件消失的时候，最好把全局事件总线中的事件绑定关系删除掉。
    //生命周期钩子
    onUnmounted(() =>{
        //删除这个绑定关系
        emitter.off("send-moen");
    });
</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(171, 197, 140);
}
</style>