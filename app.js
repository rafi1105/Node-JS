// const http = require ('http')
// const server = http.createServer((req, res)=>
// {
//    if (req.url=="/about"){
//     res.end("the about page")
//    }
//    else if (req.url=="/profile"){
//     res.end ("Profile page loading ....")
//    }
//    else
//    res.end("hello...")

//    console.log(req.url)
// })
// server.listen (3000)

const http = require ('http')
const server= http.createServer((req,res)=>
{
   if (req.url =='/about')  res.end ('this is about')
   else if  (req.url == '/profile') { res.end ("profile loading")}
   else { res.end ("home page ")}
}
)
server.listen(3000)