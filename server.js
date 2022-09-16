const express = require('express')
const app = express()
// const PORT =3000
const mongoose = require('mongoose')
const { PORT, mongoUri }  = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const BlogPostRoutes = require('./routes/api/blogPost')
const path = require('path')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
    .connect(mongoUri,{
        // useNewUrlParser:true,
        // useCreateIndex:true,
        // useUnifiedTechnology:true,
        //         useFindAndModify:false
    })
        .then(()=>console.log("mongoDB database connected"))
        .catch((err)=>console.log(err))

app.use('/api/blogPost',BlogPostRoutes)

if(process.env.NODE_ENV ==='production') {
    app.use(express.static('client/dist'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
    })
}

app.listen(PORT,()=>console.log(`listening at:${PORT}`))
