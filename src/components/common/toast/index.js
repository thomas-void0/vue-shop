import Toast from "./Toast";
const obj = {}
obj.install = function(Vue){
    // 1，创建组件构造器
    const comConstructor = Vue.extend(Toast);
    //2，根据组件构造器创建一个组件对象
    const toast = new comConstructor();
    //3. 将组件对象手动挂载到某一个元素上面
    toast.$mount(document.createElement("div"));
    //4. 将元素添加到文档结构中,这个时候的toast.$el就是div了
    document.body.appendChild(toast.$el);
    //5. 将对象挂载到vue原型上面
    Vue.prototype.$toast = toast;
}
export default obj;