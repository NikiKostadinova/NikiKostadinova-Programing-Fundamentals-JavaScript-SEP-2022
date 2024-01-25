function activationKey(input) {

    let key = input.shift();

    let command = input.shift();

    while (command !== 'Generate') {

        let instruction = command.split('>>>');

        switch (instruction[0]) {

            case 'Contains':
                if (key.includes(instruction[1])) {

                    console.log(`${key} contains ${instruction[1]}`);
                } else {

                    console.log('Substring not found!')
                }
                break;
            case 'Flip':

                let startIndex = instruction[2];
                let endIndex = instruction[3];
                let substring = key.substring(startIndex, endIndex);
                let newSubstring = '';

                if (instruction[1] === 'Upper') {

                    newSubstring = substring.toUpperCase();
                    key = key.replace(substring, newSubstring);
                    console.log(key);
                } else if (instruction[1] === 'Lower') {

                    newSubstring = substring.toLowerCase();
                    key = key.replace(substring, newSubstring);
                    console.log(key);
                }
                break;
            case 'Slice':
                let start = instruction[1];
                let end = instruction[2];
                let sub = key.substring(start, end);
                key = key.replace(sub, '');
                console.log(key);
                break;
        }

        command = input.shift();
    }

    console.log(`Your activation key is: ${key}`);


}

// activationKey((["abcdefghijklmnopqrstuvwxyz",

//     "Slice>>>2>>>6",

//     "Flip>>>Upper>>>3>>>14",

//     "Flip>>>Lower>>>5>>>7",

//     "Contains>>>def",

//     "Contains>>>deF",

//     "Generate"]));

activationKey((["134softsf5ftuni2020rockz42",

"Slice>>>3>>>7",

"Contains>>>-rock",

"Contains>>>-uni-",

"Contains>>>-rocks",

"Flip>>>Upper>>>2>>>8",

"Flip>>>Lower>>>5>>>11",

"Generate"]))