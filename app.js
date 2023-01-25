const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine','ejs');

let items = ["i love to eat"]
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname+'\\public'))

console.log(__dirname+'\\public')


app.get('/',(req,res)=>{
  
    let today = new Date()
    let options= {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    let day = today.toLocaleDateString('en-US',options)

    res.render('list',{kindofday : day, newListItems:items})
});


app.post('/',(req,res)=>{
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/")
})




app.listen(3000,(req,res)=>{
    console.log("Server is initiated on port 3000")
})