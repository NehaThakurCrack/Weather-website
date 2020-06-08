const request =require('request')

const geocode= (address, callback)=> {
    console.log('hi')
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibmVoYS10aGFrdXItciIsImEiOiJja2E4YmwzeHcwMnplMnFxajVoc2prMmhnIn0.LeLR9tKRLtbqFkxLhkcIcQ&limit=1"
    request({url: url, json: true}, (error, {body}={})=>{
        if(error){
                  callback("Sorry!.....Some connectivity issue is there", undefined)
        }
        else if(body.features.length === 0){
                  callback("unable to find the location you entered",undefined)
           }else{
              callback(undefined, {
                  latitude: body.features[0].geometry.coordinates[0],
                  longitude: body.features[0].geometry.coordinates[1],
                  location: body.features[0].place_name
               } )
            
             }
    })
}
module.exports= geocode
// 
// request({url: geo_url, json:true }, (error, response) => {
//     if(error){
//         console.log("Sorry!.....Some connectivity issue is there")
//     }else if(response.body.features.length === 0){
//      console.log("unable to find the location you entered")
// }else{
//        console.log(response.body.features[0].geometry.coordinates)
// }
// })
 