const fs = require("fs");

// * sync.. call
// fs.writeFileSync('./test.txt', 'hey there');

// * async.. call
// fs.writeFile("./test.txt", "hello there its async", (err) => {});

// *reading file
// const res=fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res)

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err)
//     }else{
//         console.log(result)
//     }
//     // ! the async return type is void so need a callback to return data
// })

// *append files...

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./test.txt", `${Date.now()} hey there \n`);

// *copy

// fs.cpSync('./test.txt',"./copy.txt")
// *delete
// fs.unlinkSync('./copy.txt')
//* stats
// console.log(fs.statSync('./test.txt'))


// *make directory
// fs.mkdirSync("my-docs")
// fs.mkdirSync("my-docss/a/b",{recursive:true})
