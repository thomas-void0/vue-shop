import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 导入组件
const Home  = ()=>import("../views/home/Home");
const Profile = ()=>import("../views/profile/Profile")
const Category = ()=>import("../views/category/Category")
const Cart = ()=>import("../views/cart/Cart")

const routes = [
    {path:"",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/category",component:Category},
    {path:"/profile",component:Profile},
    {path:"/cart",component:Cart},
]

export default new VueRouter({
    routes,
    mode:"history"
})