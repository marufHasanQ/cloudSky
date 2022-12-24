



















//import {createUserPreferenceFromArguments} from './preference.mjs';
//const argumentArray = createArgument2DArray(process.argv.slice(2) );
//const preferance = createUserPreferenceFromArguments(argumentArray);
//console.log(argumentArray);

//from arguments it returns a formated 2d array
//formate [[option,[val1,val2],[option2,[value1,value2]]
export function createArgument2DArray(argvArray) {

    return Array.from(
        argvArray.join(' ')
        // matches the string '--option [value,vaue2 ..]'
        
        .matchAll(/-(\w+)( [^-]+)*/g)
    )
        .map(v => [v[1],v[2]])
        .map(v => [v[0], createArrayOfNonEmptyParameter(v[1]) ]);

    function createArrayOfNonEmptyParameter(parameterString) {

        //if the options has no value, for example --options1 v1 v2 --noValueObtion
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
