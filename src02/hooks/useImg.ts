import { reactive } from 'vue';
import axios from 'axios';

// 这里使用的是默认导出
// 把hook导出
// 每个hook对应一个独立的逻辑（业务。）
export default function(){
    // 数据
    let imgs = reactive(['https://img.btstu.cn/api/images/5a4ca29ea74cd.jpg']);

    // 方法
    async function addImg() {
        try {
            let response = await axios.get('https://api.btstu.cn/sjbz/api.php?format=json');
            imgs.push(response.data.imgurl);
        } catch (error) {
            alert(error);
        }
    }
    return {imgs, addImg};
}