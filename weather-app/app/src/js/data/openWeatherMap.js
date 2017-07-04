import axios from "axios";

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=fff2056b4b7264c7a1e42d41438afe4c&units=metric";

module.exports = {
    getTemp: function(city) {
        let encodeCity = encodeURIComponent(city)
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeCity}`;
        
        return axios.get(requestUrl).then((res) => {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        },(err) => {
            throw new Error(err.response.data.message);
        });
    }
}