//组合式api

import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useCountStore = defineStore("count", () => {
    //数据
    let count = ref(1);
    let n = ref(1);
    //actions
    function add() {
        count.value += n.value;
    }

    function minus() {
        count.value -= n.value;
    }

    //getters(计算属性)
    let bigCount = computed(() => {
        return count.value * 10;
    });

    //暴露出去
    return { count, n, add, minus, bigCount };
});

//导出
export default useCountStore;