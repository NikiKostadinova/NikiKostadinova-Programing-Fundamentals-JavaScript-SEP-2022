function makeADictionary(input) {
    let dictionaryObj = {};
    for (let element of input) {
        let oneObj = JSON.parse(element);
        dictionaryObj = Object.assign(dictionaryObj, oneObj);
    }
    let sorted = Object.keys(dictionaryObj);
    sorted.sort((a, b) => a.localeCompare(b));
    for (let term of sorted) {
        let newDefinition = dictionaryObj[term];
        console.log(`Term: ${term} => Definition: ${newDefinition}`)
    }

}
makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ] )