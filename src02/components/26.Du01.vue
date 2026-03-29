<template>
  <div>
    <button @click="getDu">获取毒鸡汤</button>
    <ul>
        <li v-for="(du,index) in duStore.duList" :key="du.id">
            {{ index }} - {{ du.content }}
    </li>
  </ul>
  </div>
</template>

<script lang="ts" setup>
import useDuStore from '../store/Du';

  //获取一个单例的仓库。
  let duStore = useDuStore();

  function getDu(){
      duStore.getDu();
  }

  //订阅仓库
  duStore.$subscribe((mutate,state)=>{
    //只要数据发生变化，九江最新的数据存储到localStorage中。

    //localStorage只能储存字符串。
    //将state转换成json格式的字符串。
    let duListStr = JSON.stringify(state.duList);
    //储存到localStorage中
    localStorage.setItem("duList", duListStr);
  })
</script>

<style scoped>

</style>