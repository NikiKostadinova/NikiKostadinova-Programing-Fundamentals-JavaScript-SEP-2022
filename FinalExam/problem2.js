function messageTranslator(input){

    let numberOfStr = Number(input.shift());
    let pattern = /([!])(?<command>[A-Z][a-z]{2,})\1[:]\[(?<letter>[A-Za-z]{8,})\]/g;
    let validMessageCharNumber = [];

    for(let i = 0; i < numberOfStr; i++){

        let info = input.shift();
        let validString = pattern.exec(info);

        if(validString === null){

            console.log('The message is invalid');
        }else{

            let command = validString.groups['command'];
            let letter = validString.groups['letter'];

            
            for(let j = 0; j < letter.length; j ++){

                let charNum = letter.charCodeAt(j);
                validMessageCharNumber.push(charNum);
                
            }

            console.log(`${command}: ${validMessageCharNumber.join(' ')}`);          
            
        }
    }

}

// messageTranslator((["2",
// "!Send!:[IvanisHere]",
// "*Time@:[Itis5amAlready"])
// );
messageTranslator((["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
);