<template>
  <div class="person">
      <ul>
          <li v-for="person in personList" :key="person.id">
              {{person.id}},{{person.name}},{{ person.age }}
          </li>
      </ul>
      <!--获取索引：语法格式（第一个参数是数组中的元素，第二个参数就是索引下标）-->
      <!--索引从0开始-->
      <ul>
          <li v-for="(person, index) in personList" :key="person.id">
            {{ person.id }},{{ person.name }},{{ person.age }},index={{ index }}
          </li>
      </ul>
  </div>
</template>

<script lang='ts' name="PersonInfo" setup>
  //准备数据
  let personList = [
      {id: '101', name: 'jack', age: 20},
      {id: '102', name: 'lucy', age: 30},
      {id: '103', name: 'tom', age: 21},
      {id: '104', name: 'jerry', age: 35},
      {id: '105', name: 'jim', age: 25},
  ];

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
