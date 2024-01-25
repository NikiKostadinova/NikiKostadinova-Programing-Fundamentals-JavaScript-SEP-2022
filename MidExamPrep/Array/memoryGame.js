function memoryGame(array) {

    let sequenceElements = array.shift().split(' ');
    let turns = 0;

    let indexToCheck = array;

    while (array[0] !== 'end' && sequenceElements.length !== 0) {

        indexToCheck = array.shift().split(' ');
        let indexA = Number(indexToCheck[0]);
        let indexB = Number(indexToCheck[1]);
        let matchingElemntsCount = sequenceElements.length / 2;
        let matchingNumberA = sequenceElements[indexA];
        let matchingNumberB = sequenceElements[indexB];
        turns++;




        if (matchingNumberA === matchingNumberB && matchingElemntsCount >= 0) {  

            console.log(`Congrats! You have found matching elements - ${sequenceElements[indexA]}!`);

            sequenceElements = sequenceElements.filter(item => item != matchingNumberA);



        } else if (matchingNumberA !== matchingNumberB && matchingElemntsCount >= 0) {

            if (indexA === indexB || indexA < 0 || indexA >= sequenceElements.length ||
                indexB < 0 || indexB >= sequenceElements.length) {

                let newElement = `-${turns}a`;

                sequenceElements.splice(matchingElemntsCount, 0, newElement, newElement);
                console.log(`Invalid input! Adding additional elements to the board`);
            } else {

                console.log(`Try again!`);
            }
        }

        


    }

    if (sequenceElements.length === 0) {

        console.log(`You have won in ${turns} turns!`);
    } else {

        console.log(`Sorry you lose :(\n${sequenceElements.join(' ')}`);
    }

}

memoryGame( [
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
    
    )
    