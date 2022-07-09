



export const optionsArray = [
    new Map()
    .set('option',['firstArgument','fa'])
    .set('optionDiscription','this is a placeholder option')
    .set('values',['val1','val2'])
    .set('valueDiscriptions',
        [['val1','value discription'],
            ['val2','value discription']]),

    new Map()
    .set('option',['fields','f'])
    .set('optionDiscription','Adds parameters to the prediction data ')
    .set('values',['rain_sum','snowfall_sum','precipitation_sum','apparent_temperature_min','apparent_temperature_max','windspeed_10m_max'])
    .set('valueDiscriptions',
        [['rain_sum','Sum of daily rain'],
            ['precipitation_sum','  Sum of daily precipitation (including rain, showers and snowfall)'],
            ['apparent_temperature_min','Minimum daily apparent temperature'],
            ['apparent_temperature_max','Maximum daily apparent temperature'],
            ['windspeed_10m_max','Maximum wind speed and gusts on a day'],
            ['snowfall_sum','Sum of daily snowfall']]),

    new Map()
    .set('option',['secondArgument','sa'])
    .set('optionDiscription','placeholder')
    .set('values',['val1','val2'])
    .set('valueDiscriptions',
        [['val1','value discription'],
            ['val2','value discription']]),
]
//console.log(optionsArray[0]);
