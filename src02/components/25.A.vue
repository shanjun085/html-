<template>
    <h1>A...</h1>
</template>

<script lang='ts' setup>
    import { onMounted } from 'vue';
import { getCurrentInstance, onUnmounted} from 'vue';
    //导入路由器函数
    import { useRouter } from 'vue-router';
    // 在当前组件中获取当前组件实例。
    let currentInstance = getCurrentInstance();

    //编写生命周期钩子函数，测试该组件是否被卸载了。
    onUnmounted(()=>{
        console.log("当前组件已卸载完成",currentInstance);
    });

    // 调用路由器函数，获取路由器对象
    let router = useRouter();

    //A组件挂载完毕5秒之后跳转到B路由。
    onMounted(()=>{
        //再过5秒，跳转路由
        setTimeout(()=>{
            //push模式。
            router.push("/b");
            //replace模式
            //router.replace("/b");
        },5000);
        });
</script>

<style scoped>
</style>