<template>
    <div class="parent">
    <h3>父组件</h3>
    <!--子组件：在这里演示一下组件销毁-->
    <Son v-if="flag"></Son>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
    import Son from './17.son.vue';
    
    let flag = ref(true);
</script>

<style scoped>
    .parent {
        background-color: aquamarine;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>