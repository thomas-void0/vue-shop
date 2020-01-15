import axios from 'axios';
import {Notify} from "vant";

const instance = axios.create({
    baseURL:'http://123.207.32.32:8000', //配置默认地址
    timeout:5000
})

export default (url,data,type="GET")=>{
    //配置请求拦截器
    instance.interceptors.request.use(config=>{
        //dosomething
        return config
    },err=>{
        Notify({type:"danger",message:err})
    })

    // 配置响应拦截器
    instance.interceptors.response.use(res=>{
        //dosomething
        return res 
    },err=>{
        Notify({type:"danger",message:err})
    })

    return new Promise( resolve=>{
        let reqData = null;
        if(type === "GET"){
            reqData = instance.get(url,{params:data});
        }else{
            reqData = instance.post(url,data);
        }
        reqData.then(res=>{
            resolve(res);
        }).catch(err=>{
            Notify({type:"danger",message:`数据请求失败：${err}`});
        })
    })
}