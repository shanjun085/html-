<template>
    <div>
        <h3>计数器:{{ count }}</h3>
        <button @click="addOne">计数+1</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref, watch} from 'vue';

    let count = ref(0);

    let addOne = () =>{
        count.value++;
    }
//监视ref包裹的原始类型数据。
//watch(被监视的数据，回调函数，配置项);
// watch(count,(newVal, oldVal)=>{
//     console.log("count被修改了",newVal,oldVal);
// },{});

//配置项:immediate：true，表示立即监视：页面打开时就执行一次监视的回调函数。
// watch(count,(newVal,oldVal)=>{
//    console.log("count被修改了"，newVal，oldVal)；
//},{immediate:true});

//完成一个需求：当计数器达到10的时候，停止监视。
//watch函数有一个返回值，返回值是一个函数，这个函数无参数无返回值。
//它的作用是停止当前的监视。
const stopWtch = watch(count,(newVal,oldVal)=>{
    console.log("count被修改了",newVal, oldVal);
    if(count.value >=10){
        //停止监视
        stopWtch();
    }
},{immediate:true});
</script>

<style scoped>
</style>