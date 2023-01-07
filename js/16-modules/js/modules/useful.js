export const legalAge = age => age>=18

export const group = people=> people.reduce(function(accumulator, arrayValue){
    const propLegalAgeOrMinor = arrayValue.age>=
        18?'legalAge':'minor'
    accumulator[propLegalAgeOrMinor].push(arrayValue)

    return accumulator
},{legalAge:[], minor:[]})