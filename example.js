let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// map
// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

let result = names.map((item)=>{
    item = item.toUpperCase()
    return item  
})
console.log(result)

let result2 = names.map((item)=>{
    item = item.split(" ")
    console.log("split", item)
    return item[0]  
})
console.log(result2)

let result3 = names.map((item)=>{
    item = item.toUpperCase()
    item = item.split(" ")
    console.log("split", item)
    item = item[0][0] + item[0][1] + item[0][2]
    return item
})
console.log("이니셜",result3)
