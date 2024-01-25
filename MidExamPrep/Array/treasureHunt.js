function treasureHunt(array) {

    let treasureChest = array.shift().split('|');
    let command = array.shift().split(' ');

    while (command[0] !== 'Yohoho!') {

        let comm = command.shift();

        if (comm === 'Loot') {

            let insertTreasure = command;

            for (let i = 0; i < insertTreasure.length; i++) {

                let treasure = insertTreasure[i];

                if (treasureChest.includes(treasure) === false) {

                    treasureChest.unshift(treasure);
                } else {
                    continue;
                }

            }
        } else if (comm === 'Drop') {

            let index = Number(command);

            if (index >= 0 && index < treasureChest.length) {

                let item = treasureChest[index];
                treasureChest.splice(index, 1);
                treasureChest.push(item);
            }


        } else if (comm === 'Steal') {

            let count = Number(command);
            let arrayTreasureChest = treasureChest.map((x) => x);
            let stolenItems = [];


            for (let j = 1; j <= count; j++) {

                
                if (j <= arrayTreasureChest.length) {

                   let item = treasureChest.pop();
                    stolenItems.unshift(item);
                } else {

                    break;
                }
            }

            console.log(stolenItems.join(', '));

        }

        command = array.shift().split(' ');

    }

    let sumLengthItems = 0;
    let average = 0;
    let count = 0;

    for (let l = 0; l < treasureChest.length; l++) {

        let item = treasureChest[l];
        let itemLength = item.length;
        sumLengthItems += itemLength;
        count++;

    }

    average = sumLengthItems / count;



    if (treasureChest.length === 0) {

        console.log(`Failed treasure hunt.`);
    } else {

        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
