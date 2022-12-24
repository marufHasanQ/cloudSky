import  {background,blueB,redB,whiteB,greyB, grey, greenB,yellowB,blackB,light,blinkSlow,dark,skyB} from './designTemplate.mjs'

//const greyB=  data => `\x1b[48;05;8m`+ data + '\x1b[0m';
//const skyB=  data => `\x1b[48;2;25;189;255m`+ data + '\x1b[0m';
const wmoCode = [
    [[0 ],[skyB(' Clear Sky ')]],
    [[1, 2, 3 ],[(skyB( ' Clear ')), greyB( ' Overcast '),greyB(' cloudy ')]],
    [[45, 48 ],[ greyB( ' Fog '), greyB( ' Fog ')]],
    [[51, 53, 55 ],[ greenB(' Light Drizzle '), yellowB(' Moderate Drizzle '), redB(' Dense Drizzle ')]],
    [[56, 57 ],[ yellowB(' Moderate Freezing Drizzle '), redB(' Dense Freezing Drizzle ')]],
    [[61, 63, 65 ],[ greenB(' Slight Rain '), yellowB(' Moderate Rain ' ),redB(' Heavy Rain ')]],
    [[66, 67 ],[ yellowB(' Moderate Freezing Rain ' ),redB(' Heavy Freezing Rain ')]],
    [[71, 73, 75 ],[greenB(' Slight Snow '),yellowB( ' Moderate Snow ') ,redB(' Heavy Snow ') ]],
    [[77 ],[ 'Snow grains']],
    [[80, 81, 82 ],[  greenB(' Slight Rain Showers '), yellowB(' Moderate Rain Showers ' ),redB(' Heavy Rain Showers ')]],
    [[85, 86 ],[ greenB(' Slight Snow Showers '), redB(' Heavy Snow Showers ')]],
    [[95  ],[ redB(' Thunderstorm ')]],
    [[96, 99  ],[ redB('  Thunderstorm ') ,redB('  Thunderstorm ')]]
];
//console.log(wmoCode[2][1][0]);
//console.log('code',codeTranslation(Number(process.argv[2])));

function codeTranslationFunction(wmoCode) {
    return code => {
        return  wmoCode.reduce((acc,value) => {
            return acc !==''? acc : value[0].reduce((acc,v,i) => {
                if(v === code)
                    return value[1][i];

                return acc;
            },'');
        },'');

    }
}
const codeTranslation = codeTranslationFunction(wmoCode);
export {codeTranslation};
