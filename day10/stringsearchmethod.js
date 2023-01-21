document.getElementById("demo").innerHTML="shaikh";

let str ="Apple,banana,kiwi,banana";
const bananaIndex = str.indexOf("banana",12);
console.log("posittion",bananaIndex);
const newString=str.slice(bananaIndex);
console.log("new string after slice",newString);
const searchIndex = str.search("banana");
console.log("search index  metthod",searchIndex);
let text2="the rain in spai stas mainly  in the plain";
const matchReturnvalue=text2.match("ain"); //regular expression  (/aim/)
console.log("return value",matchReturnvalue);
