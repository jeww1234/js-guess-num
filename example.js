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
console.log("result2",result2)

let result3 = names.map((item)=>{
    item = item.toUpperCase()
    item = item.split(" ")
    console.log("split", item)
    item = item[0][0] + item[0][1] + item[0][2]
    return item
})
console.log("이니셜",result3)



// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)


let result4 = names.filter((item)=>{
    item = item.split(" ")
    item = item[0]
    return item.includes("a")    
})
console.log("a",result4)
//includes가 있는데 왜 이렇게 복잡하게 생각했지???

let result5 = names.filter((item)=>{
    item.map((n)=>{
        
    })
    return item.includes("a")    
})
console.log("a",result5)


