<template>
  <div class="person">
      <!-- $event -->
      <!-- 调用函数的时候，没有显示的传递 $event，那么vue也会自动传递当前的事件对象。 -->
      <button @click="testEvent">测试 $event</button>

      <!-- 也可以显示的传递事件对象 -->
      <!-- 在模板页面中vue内置了$event，是固定写法，不能随便写。它代表当前发生的事件对象。 -->
      <button @click="testEvent($event)">测试 $event</button>

      <!-- 如果你需要调用函数时，需要传递其他参数，同时又需要传递事件对象，那么这个$event 别省略。 -->
      <button @click="testEvent2(1, 2, $event)">测试 $event</button>
  </div>
</template>

<script lang='ts' setup>
    function testEvent(myEvent: any){
    console.log(myEvent);
    }

    function testEvent2(a: number,b:number, c:any){
      console.log(a,b,c);
    }
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
