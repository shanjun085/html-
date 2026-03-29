<template>
    <div class="parent">
        <h1>父组件</h1>
        <h3 v-if="fromSon">收到了子的：{{ fromSon }}</h3>
        <!-- 注意：Vue开发规范中建议自定义事件的名字要遵循kebab-case风格（烤肉串式命名）。 -->
        <Son @get-love="acceptLove"/>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import { ref } from 'vue';
    import Son from './28.Son.vue';

    // 数据
    let fromSon = ref('');

    // 方法
    // 触发get-love事件时，传递过来的'关爱'数据会自动注入到acceptLove函数中。
    // 使用 loveFromSon 变量接收传递过来的 '关爱'
    function acceptLove(loveFromSon: string, event: Event){ 
        fromSon.value = loveFromSon;
        console.log('发生事件的目标元素是：', event.target);
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