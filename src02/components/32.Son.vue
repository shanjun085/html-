<template>
    <div class="son">
        <h2>子组件</h2>
        <Grandson/>
    </div>
</template>

<script lang='ts' setup name="Son">
    import Grandson from './32.Grandson.vue';
</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(101, 207, 124);
}
</style>