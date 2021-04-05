let str=''
for (let i = 1 ; i < 14 ; i ++){
    str = ` {黑桃:${i}}  `
    //console.log(str)

}
const cards = ` {黑桃:1} , {黑桃:2} ,{黑桃:3}  ,{黑桃:4}  ,{黑桃:5}  ,{黑桃:6}  ,{黑桃:7}  ,{黑桃:8}  ,{黑桃:9}  ,{黑桃:10}  ,{黑桃:11} , {黑桃:12},  {黑桃:13}`
const n01 = cards.indexOf ('{黑桃:1}')
const n02 = cards.indexOf ('{黑桃:2}')
const n03 = cards.indexOf ('{黑桃:10}')
const n04 = cards.indexOf ('{黑桃:13}')
console.log(n01,n02,n03,n04)
console.log('最大的同花順')
console.log(cards.substring(cards.indexOf('{黑桃:10}'),119))
console.log(cards.substring(1,8))  // 問題：數字1在頭 10到13在尾 但如果一console兩個 會把中間也顯示出來

console.log("--------------------------------")
/*cards.forEach(element => {
    console.log(element.replace("黑桃","梅花"))
});*/
console.log('最小的同花順')
const n05 = cards.indexOf ('{梅花:1}')
const n06 = cards.indexOf ('{梅花:6}')
console.log(cards.substring(cards.indexOf('{梅花:1}')),cards.substring(cards.indexOf('{梅花:6}')))
//   問題：找不到錯誤的地方..