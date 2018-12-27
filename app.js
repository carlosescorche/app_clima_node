const address = require('./address/address')
const weather = require('./weather/weather')

const yargs = require('yargs').options({
    direccion:{
        alias : 'd',
        desc : 'Dirección de la ciudad para obtener el clima',
        demand : true
    }
}).argv

const get_info = async(direccion) => {
    
    //try{
        coords = await address.get_coords(direccion)
        temp = await weather.get_clima(coords.lng, coords.lat)
        return `El clima en ${coords.direccion} es de ${temp}`
    //}catch(e){
    //    return `No se pudo determinar el clima de ${direccion}`
    //}
    
}

get_info(yargs.direccion).then((data) => {
    console.log(data)
}).catch((e) => {
    console.log()
})




