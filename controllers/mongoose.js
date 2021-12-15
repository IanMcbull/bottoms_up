const mongoose = require('mongoose');

mongoose.connect(process.env.URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(client=>{
    console.log('Connected to the database')
}).catch(err=>{
    console.log('Something went wrong')
})
