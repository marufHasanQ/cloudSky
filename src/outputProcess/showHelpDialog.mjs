

import {grey, yellow, black, skyB, greenB, yellowB, underline} from './designTemplate.mjs'

export function showHelpDialog(optionsArray) {
    return inputArray => {
        console.log();
        console.log(black(skyB(' A command line weather App ')));
        console.log();
        console.log();
        console.log(grey(underline('Options')));
        console.log();
        optionsArray.forEach(v => {

            printOptionParagraph(v)(inputArray);
        })
    }
}
function printOptionParagraph(option) {
    return inputArray => {
        console.log(black(greenB(' ' + option.get('option') + ' ')));
        console.log();
        console.log(' ', grey(option.get('optionDiscription')));
        console.log();
        console.log(grey('       Example: ' + option.get('example') + ' '));
        console.log();
        console.log(grey(underline(' Values ')));
        console.log();
        option.get('valueDiscriptions').forEach(v => {
            //horizontalPlacement([`${yellow(v[0])}` ,`: ${grey(v[1])}`]) (`${grey('_').repeat( 35 - v[0].split('').length)}`);
            console.log(' ' + yellowB(black(' ' + v[0] + ' ')));
            console.log(' ' + grey(' ' + v[1] + ' '));
            console.log();

        })
        console.log();

    }
}

function horizontalPlacement(array) {
    return gap => console.log(array.reduce((acc, v) => acc + gap + v));
}
