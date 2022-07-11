



export const optionsArray = [
    new Map()
    .set('option',['temperature_unit','tu'])
    .set('optionDiscription','Changes the the units to the fields that are related to temperature.')
    .set('values',['celsius','fahrenheit'])
    .set('valueDiscriptions',
        [['celsius','Sets temperature unit to celsius.'],
            ['fahrenheit','Sets temperature unit to fahrenheit.']]),

    new Map()
    .set('option',['fields','f'])
    .set('optionDiscription','Adds parameters to the prediction data. ')
    .set('values',['rain_sum','snowfall_sum','precipitation_sum','apparent_temperature_min','apparent_temperature_max','windspeed_10m_max'])
    .set('valueDiscriptions',
        [['rain_sum','Sum of daily rain.'],
            ['precipitation_sum','  Sum of daily precipitation (including rain, showers and snowfall).'],
            ['apparent_temperature_min','Minimum daily apparent temperature.'],
            ['apparent_temperature_max','Maximum daily apparent temperature.'],
            ['windspeed_10m_max','Maximum wind speed and gusts on a day.'],
            ['snowfall_sum','Sum of daily snowfall.']]),

    new Map()
    .set('option',['past_days','pd'])
    .set('optionDiscription','Sets the starting day for the prediction.')
    .set('values',['1','2'])
    .set('valueDiscriptions',
        [['1','Start the prediction one day before the currnet date.'],
            ['2','Start the prediction two days before the currnet date.']]),

    new Map()
    .set('option',['windspeed_unit','wu'])
    .set('optionDiscription','Changes the units which are related to windspeed.')
    .set('values',['kmh','mph','ms','kn'])
    .set('valueDiscriptions',
        [['kmh','Sets the windspeed unit to kmh. this is difault.'],
            ['mph','Sets the windspeed unit to mph.'],
    ['ms','Sets the windspeed unit to ms.'],
    ['kn','Sets the windspeed unit to kn.']]),
]
//console.log(optionsArray[0]);
