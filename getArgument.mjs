



















//import {createUserPreferenceFromArguments} from './preference.mjs';
//const argumentArray = createArgument2DArray(process.argv.slice(2) );
//const preferance = createUserPreferenceFromArguments(argumentArray);
//console.log(argumentArray);

export function createArgument2DArray(argvArray) {
    return Array.from(
        argvArray.join(' ')
        .matchAll(/-(\w+)( [^-]+)*/g)
    )
        .map(v => [v[1],v[2]])
        .map(v => [v[0], createArrayOfNonEmptyParameter(v[1]) ]);

    function createArrayOfNonEmptyParameter(parameterString) {

        //console.log('para',typeof(parameterString));
        if(!parameterString)
            return ''
        return deleteDubpicateElements(

            parameterString.split(' ')
            .filter(v => v !=='')
        )
        ;
    }

    function deleteDubpicateElements(array) {
        return Array.from ( new Set(array));
    }
}
