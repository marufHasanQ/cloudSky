



export function checkArgumentValidity(optionsArray) {
    return inputArray => {

        inputArray.forEach((v) =>{

            const matchedOptions = getMatchedOptionFromInput(v)(optionsArray);

            if (!matchedOptions) 
                throw Error(`${v[0]} is an invalid options`);


            const nonValidValueArray = arraySubstuction(v[1]) (matchedOptions.get('values'));
            //console.log(nonValidValueArray);
            if ( nonValidValueArray.length !== 0) 
                throw Error(`${nonValidValueArray} of option ${v[0]} is an invalid value.`) ;
        })
        return true;
    }
}

function arraySubstuction(firstArray) {
    //console.log('arrays',firstArray);
    return secondArray => firstArray.filter(v => !secondArray.includes(v))


}
//console.log(checkArgumentValidity(optionsArray)([['firstArgument',['val1','val2']]])Your)
function getMatchedOptionFromInput(input) {
    return optionsArray =>

        optionsArray.find(option =>{

            return arraySubstuction( [input[0]] )(option.get('option')).length ===0 ? true : false ;

        })  

}
