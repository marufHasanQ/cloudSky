










export function getWeatherUrlString(inputArray) {
    return locationObject=>{
        let fields ='';
        let settings = '';
        const inputArrayMap = new Map(inputArray);
        if(inputArrayMap.has('fields')) fields = fields +','+ inputArrayMap.get('fields').join(',');
        if(inputArrayMap.has('settings')) fields = fields + inputArrayMap.get('settings')
        return `https://api.open-meteo.com/v1/forecast?latitude=${locationObject.lat}&longitude=${locationObject.lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,windspeed_10m_max,sunset${fields}&timezone=${locationObject.timezone}${settings}`;
    }
}

