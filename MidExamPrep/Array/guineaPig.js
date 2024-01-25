function guineaPig(array){

    let foodInGrams = array[0] * 1000;
    let hayInGrams = array[1] * 1000;
    let coverInGrams = array[2]* 1000;
    let guineaPigWeightInGrams = array[3] * 1000;
    let isFoodEnough = true;
    let daysCount = 0;

    for(let i = 0; i < 30; i ++){
       
        daysCount ++;
        foodInGrams -= 300;
        if(daysCount % 2 === 0){

            hayInGrams = hayInGrams - foodInGrams * 0.05;
        }
        if(daysCount % 3 === 0){

            coverInGrams =coverInGrams - guineaPigWeightInGrams / 3;
        }

        if(foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0){

            isFoodEnough = false;
            console.log(`Merry must go to the pet store!`);
            break;
        }

    }

    let foodInKg = foodInGrams / 1000;
    let hayInKg = hayInGrams / 1000;
    let coverInKg = coverInGrams / 1000;

    if(isFoodEnough){

        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`);
    }

}

guineaPig(["9",
"5",
"5.2",
"1"])