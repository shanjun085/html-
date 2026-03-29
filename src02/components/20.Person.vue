<template>
    <div class="person"> 
        <h3>Person组件</h3>
        <h4>计数器：{{ count }}</h4>
        <button @click="addOne">加1 </button>
        
        <div>
            <img v-for="item in imgs" :key="item" :src="item" alt="图片加载失败" ></img>
        </div>
        <button @click="addImg">添加图片</button>
    </div>
</template>

<script lang='ts' setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

    //实现两个业务
    //第一个业务：计数器
    let count = ref(0);

    // 初始图片使用 picsum，避免 btstu 域名在部分网络下不可用
    // random 用时间戳，确保首次加载尽量不是同一张
    let imgs = reactive([`https://img.btstu.cn/api/images/5a4ca29ea74cd.jpg`])
    function addOne(){
        count.value++;
    }
    //第二个业务：动态加载图片
    //需要VPN才能打开图片
    async function addImg(){
        try{
            let response = await axios.get('https://api.btstu.cn/sjbz/api.php?format=json');
            imgs.push(response.data.imgurl);
        }catch(error){
            alert(error);
        }
    }
</script>

<style scoped>
.person {
    background-color: rgb(129,217,246);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}
img {
    width:200px;
}
</style>