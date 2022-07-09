














import * as https from 'https';
const url = 'https://api.open-meteo.com/v1/forecast?latitude=23.7106&longitude=90.3978&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,windspeed_10m&past_days=2&current_weather=true';

const request = https.get(url);
request.on('response', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk;
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body.keys);
    });
})

request.on('error', (error) => {
    console.log('An error', error);
});

request.end()






















