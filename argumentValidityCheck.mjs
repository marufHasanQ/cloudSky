



import {optionsArray} from './options.mjs'
export function checkArgumentValidity(optionsArray) {
    return argumentArray => {
        argumentArray.forEach((v) =>{
            const matchedOptions = optionsArray.find(option =>{
                return arraySubstuction( [v[0]] )(option.get('option')).length ===0 ? true : false ;

            })  
            if (!matchedOptions) throw Error(`${v[0]} is an invalid options`);
            const nonValidValueArray = arraySubstuction(v[1]) (matchedOptions.get('values'));
            //console.log(nonValidValueArray);
            if ( nonValidValueArray.length !== 0) throw Error(`${nonValidValueArray} of option ${v[0]} is an invalid value.`) ;
        })
        return true;
    }
}
function arraySubstuction(firstArray) {
    //console.log('arrays',firstArray);
    return secondArray => firstArray.filter(v => !secondArray.includes(v))


}
//console.log(checkArgumentValidity(optionsArray)([['firstArgument',['val1','val2']]]));
