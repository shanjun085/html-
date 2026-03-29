//组合式API
import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

// 组合式API
const useDuStore = defineStore("du", () => {

    // 数据
    // let duList = reactive([
    //     { id: 'id001', content: '过年哪个亲戚问我成绩，我就问他年终奖金。' },
    //     { id: 'id002', content: '间歇性洗心革面，持续性混吃等死。' },
    //     { id: 'id003', content: '路遥知马力不足，日久见人心叵测。' }
    // ]);

    // //从localStorage中取出这个数据
    // let duListStr = localStorage.getItem("duList");
    // let temp = null;
    // if (duListStr == null) {
    //     temp = [];
    // } else {
    //     temp = JSON.parse(duListStr);
    // }


    //包装为响应式的。
    // let duList = reactive(temp);

    //TS的写法
    let duList = reactive(JSON.parse(localStorage.getItem("duList") as string) || []);
    // 方法
    async function getDu() {
        let { data: { data: { text: content } } } = await axios.get("https://api.shadiao.pro/du");
        duList.unshift({ id: nanoid(), content: content });
    }

    // 暴露出去
    return { duList, getDu };
});

// 导出
export default useDuStore;