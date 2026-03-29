import { createRouter, createWebHistory } from "vue-router";
import A from "../components/25.A.vue";
import B from "../components/25.B.vue";

//编写路由器的规则。（大Map）
const router = createRouter({
    //指定路由模式
    //路由模式包括两种：history模式，hash模式。

    //这个是history模式,后端上线需要配合处理路径问题，否则刷新会有404错误。
    history: createWebHistory(),

    //这个是hash模式
    //history:createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: '/a'
        },
        {
            //使用name属性可以给路由起名字。
            name: "a",
            path: "/a",

            //在项目构建的时候就把组件打包进去，不管用户后期是否访问这个请求路径。这个组件都会打包。
            //component: A
            //懒加载（在项目构建的时候不去构建组件，在用户发送第一次请求的时候，再进行组件的构建，属于懒加载方式）
            //中大型项目建议使用这种方式。
            component: () => import("../components/25.A.vue")
        },
        {
            name: "b",
            path: "/b",
            component: B,

            //配置子路由。在这里配置的子路由属于n路由下的子路由。
            children: [
                {
                    name: "b1",

                    //子路由的path不能以 /开头
                    path: "b1",
                    //对应的组件
                    component: () => import("../components/b/B1.vue"),
                    // props 写成函数：把当前路由的 query 当成组件 props 传给 B1（参数名一般是 route，不是 router）
                    //props: (route) => ({ ...route.query }),
                    //固定方式传参
                    props: {
                        username: "杰克",
                        age: 30,
                    },
                },
                {
                    name: "b2",
                    //path:"b2",
                    //通过params给子路由组件传参数
                    path: "b2/:username/:age?",
                    component: () => import("../components/b/B2.vue"),
                    //props配合params一起使用
                    props: true,
                }
            ]
        }
    ]
});

//导出这个路由器（默认导出）
export default router;