<template>
    <div class="parent">
        <h1>父组件</h1>
        <Son1></Son1>
        <br>
        <Son2></Son2>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import Son1 from './29.Son01.vue';
    import Son2 from './29.Son02.vue';
</script>

<style scoped>
.parent{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: skyblue;
}
</style>