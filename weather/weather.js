const axios = require('axios') 
const vars = require('../conf.json')

const APIKEY = vars['API_WEATHER']

const get_clima = async(lon,lat) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    get_clima
}