function movingTarget(array) {

    let targets = array.shift().split(' ');
    targets = targets.map(Number);


    while (array.length > 0) {

        let getCommand = array.shift().split(' ');

        if (getCommand[0] === 'Shoot') {

            let index = Number(getCommand[1]);
            let power = Number(getCommand[2]);

            if (index < targets.length && index >= 0) {

                let newNumber = targets[index] - power; // reduse number

                if (newNumber > 0) {

                    targets.splice(index, 1, newNumber);
                } else {

                    targets.splice(index, 1);

                }
            }
        } else if (getCommand[0] === 'Add') {

            let index = Number(getCommand[1]);
            let value = Number(getCommand[2]);

            if (index < targets.length && index >= 0) {

                targets.splice(index, 0, value);
            } else {

                console.log(`Invalid placement!`);
            }

        } else if (getCommand[0] === 'Strike') {

            let index = Number(getCommand[1]);
            let radius = Number(getCommand[2]);
            let numbersToRemove = radius * 2 + 1;
            let startIndex = index - radius;
            let endIndex = radius + index;



            if (startIndex >= 0 && endIndex < targets.length) {

                targets.splice(startIndex, numbersToRemove);
            } else {

                console.log(`Strike missed!`);
            }

        } else if (getCommand[0] === 'End') {

            console.log(`${targets.join('|')}`);


        }



    }


}
movingTarget(["1 2 3 4 5",

    "Strike 0 1",

    "End"])