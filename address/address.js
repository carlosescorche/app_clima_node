const axios = require('axios')
const vars = require('../conf')

const APIKEY = vars['API_GOOGLE']

const get_coords = async(direccion) => {
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${APIKEY}`)

    if (resp.data.status == 'ZERO_RESULTS'){
        throw new Error('Dirección no encontrada')
    }

    let location = resp.data.results[0]
    let coords = location.geometry.location

    return {
        direccion: location.formatted_address,
        lat : coords.lat,
        lng : coords.lng
    }
}

module.exports = {
    get_coords
}