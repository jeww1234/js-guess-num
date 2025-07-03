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

let result = names.map((item) => {
  item = item.toUpperCase();
  return item;
});
console.log(result);

let result2 = names.map((item) => {
  item = item.split(" ");
  console.log("split", item);
  return item[0];
});
console.log("result2", result2);

let result3 = names.map((item) => {
  item = item.toUpperCase();
  item = item.split(" ");
  console.log("split", item);
  item = item[0][0] + item[0][1] + item[0][2];
  return item;
});
console.log("이니셜", result3);

// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.

let result4 = names.filter((item) => {
  item = item.split(" ");
  item = item[0];
  return item.includes("a");
});
console.log("a", result4);
//includes가 있는데 왜 이렇게 복잡하게 생각했지???


// names의 요소중에 같은 글자가 연속해서 들어간 요소를 출력하시오. (예-tt,ff,ll 이런 글자들)
let result5 = names.filter((item) => {
    for(i=0; i < item.length-1;i++){
        if(item[i]===item[i+1]){
            return true
        }        
    }
    return false
});
console.log("a", result5);


// some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가? y or n
let result6 = names.some((item)=>{
    if(item.length >= 20){
        return true
    }
})
console.log(result6) //true

// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let result7 = names.some((item) => {
  item = item.split(" ");
  item = item[0]  
  return item.toLowerCase().includes('p');
});
console.log("p",result7) //false



// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
let result8 = names.every((item) => {
  if(item.length >= 20){
        return true
    }
});
console.log("every",result8) //false


// 모두의 이름에 a 가 포함되어 있는가?
let result9 = names.every((item) => {
  item = item.split(" ");
  item = item[0]  
  return item.toLowerCase().includes('a');
});
console.log("every p",result9) //false


// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let result10 = names.find((item) => {
  return item.length >= 20
});
console.log("find",result10) //false


// 미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)
let result11 = names.find((item) => {
    item = item.split(" ")
    
    return item.length >= 3

});
console.log("find",result11)

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let result12 = names.findIndex((item) => {
  return item.length >= 20
});
console.log("findIndex",result12) //false

// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let result13 = names.findIndex((item) => {
    item = item.split(" ")
    
    return item.length >= 3

});
console.log("find",result13)

