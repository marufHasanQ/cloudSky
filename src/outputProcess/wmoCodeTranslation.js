
import  {background,blinkSlow,light,green,blue,red} from './designTemplate.mjs'
const wmoCode = [
    [0 ],[ ' Clear sky']
    [1, 2, 3 ],[  'Overcast']
    [45, 48 ],[ 'Fog ']
    [51, 53, 55 ],[ 'Drizzle Light']
    [56, 57 ],[ 'Freezing Drizzle']
    [61, 63, 65 ],[' Rain', 'Slight', 'moderate' ,'heavy' ]
    [66, 67 ],[' Freezing Rain',]
    [71, 73, 75 ],[ 'Snow ','Slight', 'moderate' ,'heavy' ]
    [77 ],[ 'Snow grains']
    [80, 81, 82 ],[ 'Rain showers','Slight', 'moderate' ,blinkSlow('violent') ]
    [85, 86 ],[ 'Snow']
    [95  ],[ 'Thunderstorm']
    [96, 99  ],[ '  Thunderstorm ']
];
console.log(wmoCode[0]);
function codeTranslation(code) {
    return  wmoCode.reduce((acc,value) => {
        return value[0].reduce((acc,v,i) => {
            if(v === code)
                return value[1][i];
        },'');
    },'');
}
/*
function codeTranslation(code) {
    return    wmoCode.find(value =>{
        return v[0].find(v => v ===code);
    })
}
*/
