// // 引入createApp函数
// import {createApp} from 'vue';

// // 引入根组件App（在App.vue文件中对外暴露了组件App，因此这里才能导入App组件）
// // 这种导入方式为：默认导入。
// import App from './App.vue';

// // 采用默认导入的时候，import后面的变量名是随意的，例如也可以这样写：
// //import Application from './App.vue';

// // 将App根组件交给createApp来完成应用的创建，并且将应用挂载到id='app'的元素上
// // 任何一个App都应该有一个根组件。
// createApp(App).mount('#app');






// 导入 vue 框架内置的 createApp 函数。
// 这是命名导入方式。
// from后面的 'vue' 固定写法。表示从vue框架中导入一个函数。
// createApp函数的作用：创建应用。
import { createApp } from "vue";

// 导入根组件
import Application from "./App02.vue";

// 导入路由器
import router from "./router";

// 导入pinia
import { createPinia } from "pinia";

// 创建应用，并将应用挂载到 index.html 中的 <div id="app"></div>
//createApp(Application).mount("#app");

// 创建app
const app = createApp(Application);

//创建Pinia
const pinia = createPinia();

// 让app去使用路由器
app.use(router);

//让app使用pinia进行状态的集中管理
app.use(pinia);

// 挂载
app.mount("#app");