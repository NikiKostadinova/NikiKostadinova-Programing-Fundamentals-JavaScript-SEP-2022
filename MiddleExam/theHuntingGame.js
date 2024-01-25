function theHuntingGames(array) {

    let daysAdventure = Number(array[0]);
    let playersCount = Number(array[1]);
    let groupEnergy = Number(array[2]);
    let waterPerPersonPerDay = Number(array[3]);
    let foodPerPersonPerDay = Number(array[4]);

    let totalWater = daysAdventure * playersCount * waterPerPersonPerDay;
    let totalFood = daysAdventure * playersCount * foodPerPersonPerDay;

    let daysCount = 0;

    let energyDroppedFromWood = array.slice(5).map(Number);

    for (let i = 0; i < energyDroppedFromWood.length; i++) {

        let energyDropPerDay = energyDroppedFromWood[i];
        groupEnergy -= energyDropPerDay;
        daysCount++;

        if (groupEnergy <= 0) {

            break;
        }
        if (daysCount % 2 === 0) {

            groupEnergy = groupEnergy + groupEnergy * 0.05;
            totalWater = totalWater - totalWater * 0.30;
        }
        if (daysCount % 3 === 0) {

            groupEnergy = groupEnergy + groupEnergy * 0.10;
            totalFood = totalFood - (totalFood / playersCount);
        }


    }

    if (groupEnergy > 0) {

        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {

        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }


}

theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]

)