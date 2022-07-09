

import {blueBackground,grey} from './designTemplate.mjs'

export function showHelpDialog(optionsArray) {
    return inputArray => {

        console.log('A command line weather App');
        optionsArray.forEach(v =>{

            printOptionParagraph(v)(inputArray);
        })
    }
}
function printOptionParagraph (option) { 
    return inputArray => {
        console.log(blueBackground(option.get('option')));
        console.log(option.get('optionDiscription'));
        option.get('valueDiscriptions').forEach(v => {
            console.log(`${v[0]} : ${v[1]}`)

        })

    }
}

