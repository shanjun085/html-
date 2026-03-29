<template>
  <div>
    <button @click="getDu">获取毒鸡汤</button>
    <ul>
        <li v-for="(du,index) in duList" :key="du.id">
            {{ index }} - {{ du.content }}
    </li>
  </ul>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from 'vue';

let duList = reactive([
  {id: 'id001', content: '过年哪个亲戚问我成绩，我就问他年终奖金。'},
  {id: 'id002', content: '间歇性洗心革面，持续性混吃等死。'},
  {id: 'id003', content: '路遥知马力不足，日久见人心叵测。'}
]);

async function getDu(){
  // AJAX 请求获取毒鸡汤
  let response = await axios.get("https://api.shadiao.pro/du");

   /*   let result = response.data;
   let content = result.data.text;
   //将获取的毒鸡汤添加到数组的第一个元素位置上。
   let duObj = {id:nanoid(), content: content};
   duList.unshift(duObj);
    */
   //使用连续解构 + 重命名简写代码。
   let {data:{data:{text:content}}} = response;
   duList.unshift({id:nanoid(), content: content});
}
</script>

<style scoped>

</style>