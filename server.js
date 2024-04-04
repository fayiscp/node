let express = require('express');
let app = express();

let cors = require('cors')

let mongoose = require("mongoose")

let users = require('./model.js')

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/class').then((res) => {
    // console.log(res);

    console.log("database connected");

}).catch((err) => {
    console.log(err);
})
 



app.post('/', async (req, res) => {
    
    let email = await users.findOne({email : req.body.email})

    console.log(email);
    if(email==null){

        let response = await users.create(req.body)
        res.json("user created successsfully")
    }else{

        res.json("user already exist")
        
    }



})

app.get('/get-all-users', async (req, res) => {

    let result = await users.find()
    console.log(result);
    res.json(result)

})

app.get('/:id', async (req, res) => {

    let { id } = req.params

    let result = await users.findOne({ _id: id })
    console.log(result);

    res.json(result)

})

app.delete('/:name',async (req,res) =>{

    console.log(req.params);
    let { name } = req.params
    
    let result = await users.deleteOne({_id:name})
    console.log(result);
    res.json('deleted successfully')
    
})


app.listen(3000, (err) => {
    if (err) {
        console.log('err');
    } else {
        console.log('server connected');
    }

})