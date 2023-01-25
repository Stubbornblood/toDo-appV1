const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const date = require(__dirname+'\\date.js')

app.set('view engine','ejs');

let items = []
let workItems=[]
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname+'\\public'))

console.log(__dirname+'\\public')


app.get('/',(req,res)=>{
 let day = date.day() 
  res.render('list',{listTitle:day, newListItems:items})
});


app.get('/work',(req,res)=>{
    res.render('list',{listTitle:"Work",newListItems:workItems})
})

app.post('/',(req,res)=>{

    console.log(req.body.list)

    let item = req.body.newItem;

    if(req.body.list==="Work"){
      workItems.push(item);
      res.redirect('/work')
    }else{
      items.push(item);
      res.redirect("/")
    }
})

// app.post('/work',(req,res)=>{
//     let item= req.body.newItem;
//     workItems.push(item)
//     res.redirect("/work")
// })

app.get('/about',(req,res)=>{
    res.render('about');
});


app.listen(3000,(req,res)=>{
    console.log("Server is initiated on port 3000")
})