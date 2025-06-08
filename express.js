const express = require ('express')
const app = express();

const morgan = require ('morgan')

app.set ("view engine",'ejs')
// third party middleware for response time of the page 
app.use (morgan('dev'))
// middle ware help to resonpse in every route custome
app.use ((req,res,next)=>{
    console.log("this is middleware")
    const a=2
    const b=3
    console.log((a + b) == 5 ? "server working" : "not working")
    return next();
})

// app.get('/',(req,res,next)=>{ // work for only one route middleware  
//     console.log("home page working...")
//      next();
// }, (req,res)=>{
//     res.render('index')
// })
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>
    {
    res.render('form')
    })
    // form data received 
app.use(express.json())
app.use(express.urlencoded({exptended:true}))
// data push in db create
app.post('/get-form-data',async (req,res)=> {
    // console.log(req.body)
    const {username, email, password }=req.body
   await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send("submition completed !")
})

// find database user
app.get('/get-user', (req,res)=> {
    userModel.find({
        username:'rafi' // find() if all user require // if not find then return 'array []'
    }).then((user)=>{
        res.send(user)
    })
})
// find another way return only one data on db // if user not find then return 'null'
app.get('/get-user2',(req,res)=> {
    userModel.findOne({
        username: 'rafi'
    }).then((user)=>{
        res.send(user)
    } )
})
// updata in data base
app.get ('/update-user',async(req,res)=> {
   await userModel.findOneAndUpdate({
        username: 'rafi'
    },{
        email: "rafi@gmail.com"
    })
    res.send("user update")
})
// delete in db
app.get('/user-delete', async(req,res)=>{
    await userModel.findOneAndDelete({
        username:"rafi"
    })
    res.send("user deleted")
})
// add css
app.use(express.static("public"))



// connection database
const dbConnection = require('./config/db')
// create db
const userModel= require('./models/user')
app.listen (3000)