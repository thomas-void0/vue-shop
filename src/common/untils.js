// 从得到的数据中抽取image和link，并返回新的数据
export const handleImgAndLink = (data)=>(
    [...data].reduce((pre,{image,link,title},index)=>{
        pre.push({id:index,image,link,title})
        return pre;
    },[])
)

// 将请求到的数据转化为JSON数据
export const translateToJson = (data)=>JSON.parse(JSON.stringify(data));

// 防抖函数
export const debounce = (func,delay)=>{
    let timer = null;
    return function(...args){ 
        timer && clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

// 节流函数
export const throttle = (func,waitTime)=>{
    let oldTime = 0; //上一次调用的时间,默认为0
    return function (...args){
        let nowTime = +Date.now();
        if(nowTime - oldTime >= waitTime){
            func.apply(this,args);
            oldTime = nowTime;
        }
    }
}
