import { onMounted,ref } from 'vue';

export default function () {
  // 数据
  let count = ref(0);

  // 方法
  function increment() {
    count.value++;
  }

  //在Hooks中支持生命周期钩子的编写么？是的，支持。
  //组件挂载完毕之后要执行的回调
  onMounted(() =>{
    console.log("组件挂载完毕");
  });

  return { count, increment };
}