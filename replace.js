let obj = {
"key" : [ 'aaa' , 'bbb', 'ccc' , 'ddd']
    ,
    "hello" : [ 'aaa' ,'bbb' ,'ccc','ddd']
}
obj["key"].forEach((ele)=>{
    console.log(ele.replace('bbb', 'eee'))
   }),
obj["hello"].forEach((ele)=>{
    console.log(ele.replace('bbb', 'eee'))
   })
