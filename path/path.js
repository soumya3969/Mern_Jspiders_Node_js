const path = require("path");

// *Join
// let res=path.join(__dirname,'abc.txt')
// let res2=path.join(__dirname,"..",'./fs/DemoNew.txt')
// console.log(res)
// console.log(res2)

// *resolve
let result = path.resolve(__dirname, "../..", "demo", "a.txt");
// console.log(result)

// *basename
let result2 = path.basename(result);
// console.log(result2)

// *extname
let result3 = path.extname(result);
// console.log(result3)

// *Format
let url = {
  base: "a.txt",
  dir: "c//home/abc"
};
let result4 = path.format(url);
// console.log(result4)

// *normalize
let result5 = path.normalize(__dirname, "\\abc", "a.txt");
console.log(result5);
