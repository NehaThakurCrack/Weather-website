
const geocode= require('./geocode')
const forecast= require('./forecast')
const path= require('path')
const express = require('express')
const hbs=require('hbs')

const app = express()
const port=process.env.PORT || 3000
 app.use('/about/',express.static(path.join(__dirname,'../views')))
 hbs.registerPartials(path.join(__dirname,'../partials'))
app.set('view engine', 'hbs')
app.get('/about',(req, res) =>{
    res.render('about', {
        title: 'hi'
    })
})
app.get('/weather',(req, res)=>{
    if(!req.query.address)
        {
            return res.send("please enter address")
        }
        else 
        {
             geocode(req.query.address, (error, {latitude, longitude, location}={})=>{
            if(error){
               return res.send({
                    error: 'Error occurred'
                })
            }
            forecast({latitude, longitude},(error, response)=>{
                if(error){
                    return console.log("error in forecast")
                }
                console.log(location)
                console.log("response", response)
                res.send({
                    location: location ,
                    address: response
                })
            })
        })
    
}
})
 app.get('*', (req, res)=>{
     res.send("page not found 404")
 })
app.listen(port, ()=>{
    console.log('server is up'+ port)
})