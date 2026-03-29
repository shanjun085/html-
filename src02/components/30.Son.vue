<template>
    <div class="son">
        <h2>子组件</h2>
        <h2>a: {{ a }}</h2>
        <h2>$attrs中的数据：{{ $attrs }}</h2>
        <!-- 传递数据 -->
        <Grandson v-bind="$attrs"/>
    </div>
</template>

<script lang='ts' setup>
    import Grandson from './30.Grandson.vue';
    // 由于a在这里已经通过defineProps消费掉了。所以$attrs还包含 b x y 的数据。
    defineProps(['a']);
</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(216, 237, 149);
}
</style>