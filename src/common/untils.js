// 从得到的数据中抽取image和link，并返回新的数据
export const handleImgAndLink = (data)=>(
    [...data].reduce((pre,{image,link,title},index)=>{
        pre.push({id:index,image,link,title})
        return pre;
    },[])
)

// 将请求到的数据转化为JSON数据
export const translateToJson = (data)=>JSON.parse(JSON.stringify(data));

