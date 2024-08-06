const fs = require("fs");
// console.log(fs)
// *write file
// ? Sync
// console.log('devtest1')
// fs.writeFileSync("./files/demo.txt","hello world")
// fs.writeFileSync("./files/index.html","<h1>hyy there</h1>")
// console.log('devtest2')

// ?Async
// console.log("devTestAsync1");
// fs.writeFile("./files/AsyncDemo2.txt", "hello world", (err) => {
//   if (err) {
//     return;
//   } else {
//     console.log("done");
//   }
// });
// console.log("devTestAsync2");
// fs.writeFile("./files/userData.txt ", "hello im soumya", (err) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("done");
//   }
// });

// *Read
// ?sync
// const data=fs.readFileSync("./files/demo.txt","utf-8")
// console.log(data);

// ?async
// fs.readFile("./files/abc.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.log("Error",err)
//     } else {
//         console.log(data)
//     }
// })

// *Update //// Append
// ?sync

// ?async
fs.appendFile("./files/abc.txt",`I'm a mern stack student \n`,(err)=>{
    if (err) {
        console.log("Error",err)
    } else {
        console.log("update Successful")

    }
})

// *Delete File
// fs.unlinkSync("./files/demo.txt")

// *Rename File
// fs.renameSync('./files/AsyncDemo.txt','DemoNew.txt')
// *create Folder
// fs.mkdirSync('./neya folder')
// fs.mkdirSync('./neya folder/gg',{recursive:true})
// *remove/delete Folder
//  fs.rmdirSync('./neya folder')

// *copy file
// fs.copyFileSync('./DemoNew.txt','./files/abc.txt')
// fs.cpSync('./DemoNew.txt','./files/abcNew.txt')
// fs.cpSync('./DemoNew.txt','../path/abc.txt')
