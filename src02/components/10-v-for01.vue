<template>
  <div class="person">
    <!-- v-for遍历对象的属性。-->
    <ul>
      <!--
        第一个参数：属性值
        第二个参数：属性名
        第三个参数：索引
      -->
      <li v-for="(a,b,c) in person" :key="b">
      {{ a }},{{ b }},{{ c }}
      </li>
    </ul>
    <ul>
      <li v-for="num in count" :key="num">
            {{ num }}
      </li>
    </ul>
  </div>
</template>

<script lang='ts' name="PersonInfo" setup>
    //准备一个对象（不一定是响应式）
    let person ={
      name:"jack",
      age:20,
      email:"jack@123.com",
      tel:"18888888888"
    }
    let count =10;
</script>

<style scoped>
.person {
  background-color: rgb(252, 152, 80);
  box-shadow: 0 0 15px;
  border-radius: 15px;
  padding: 15px;
}
button {
  margin-right: 10px;
}
</style>
