const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{'content-type':'text'})
    students=[
        {
            id:1,name:"keers"
        },
        {
            id:2,name:"geetha"
        }
    ]
    if(req.url==='/'){
        res.write("Hello")
        res.end()
    }
   else if(req.url==='/students')
    {
        res.write(JSON.stringify(students))
        res.end()
    }
    else if(req.url==='/index.html'){
        fs.readFile(__dirname + "/index.html","utf-8",(err,data)=>{
            res.write(data)
            res.end()
        })
    }
    else{
        res.write("no such resourcees exist")
        res.end()
    }
})
server.listen(4200, () => {
    console.log("Server listening at port 4200");
});