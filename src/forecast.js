const request = require ('request')
const forecast= (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=e70f294b770bea38c7655c9323aabc2d&query="+address.langitude+","+address.latitude
     request({url, json: true}, (error, {body})=>{
        if(error){
            callback("Sorry!.....Some connectivity issue is there", undefined)
  }
  else if(body.error){
            callback("unable to find the location you entered",undefined)
     }else{
        callback(undefined, "Today 's temperature is "+ body.current.temperature +" degrees and if feelslike "+body.current.feelslike+" and it is "+body.current.weather_descriptions)
      
       }
    })
}
module.exports = forecast