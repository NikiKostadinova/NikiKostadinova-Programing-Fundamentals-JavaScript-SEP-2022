function heartDelivery(array) {


    let neighborhood = array.shift().split('@').map(Number);
    let commands = array.shift();
    let cupidCurrentPlace = 0;
    let jumpLength = 0;


    while (commands !== 'Love!') {

        let command = commands.split(' ');
        let range = Number(command[1]);
        jumpLength = range;
        cupidCurrentPlace += jumpLength;

        if (cupidCurrentPlace >= neighborhood.length) {

            cupidCurrentPlace = 0;
        }

        if (neighborhood[cupidCurrentPlace] === 0) {

            console.log(`Place ${cupidCurrentPlace} already had Valentine's day.`);


        } else {

             neighborhood[cupidCurrentPlace] -= 2;

            if (neighborhood[cupidCurrentPlace] == 0) {

                console.log(`Place ${cupidCurrentPlace} has Valentine's day.`);

            }
        }

        commands = array.shift();
    }

    console.log(`Cupid's last position was ${cupidCurrentPlace}.`);

    let isSuccessful = true;
    let countHouses = 0;

    for (const house of neighborhood) {

        if (house !== 0) {

            isSuccessful = false;
            countHouses++;
        }
    }


    if (isSuccessful) {

        console.log(`Mission was successful.`);
    } else {

        console.log(`Cupid has failed ${countHouses} places.`);
    }

}

heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!'])