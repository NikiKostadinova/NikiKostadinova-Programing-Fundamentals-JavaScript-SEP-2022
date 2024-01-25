function decryptingCommands(input) {

    let text = input.shift();

    let commandInfo = input.shift();

    while (commandInfo !== 'Finish') {

        let commands = commandInfo.split(' ');
        let command = commands[0];

        switch (command) {
            case 'Replace':
                let currentChar = commands[1];
                let newChar = commands[2];
                let index = text.indexOf(currentChar);

                while (index >= 0) {

                    let newString = text.replace(currentChar, newChar);
                    index = text.indexOf(currentChar);
                    text = newString;

                }
                console.log(text);
                break;
            case 'Cut':
                let stratIndex = Number(commands[1]);
                let endIndex = Number(commands[2]);

                if (stratIndex >= 0 && stratIndex < text.length && endIndex >= 0 && endIndex < text.length) {

                    let substring = text.substring(stratIndex, endIndex + 1);
                    let newStr = text.replace(substring, '');
                    text = newStr;
                    console.log(text);

                } else {

                    console.log('Invalid indices!');
                }

                break;
            case 'Make':
                let comm = commands[1];
                switch (comm) {
                    case 'Upper':
                        let toUpper = text.toUpperCase();
                        text = toUpper;
                        console.log(text);
                        break;
                    case 'Lower':
                        let toLower = text.toLowerCase();
                        text = toLower;
                        console.log(text);
                        break;
                }
                break;
            case 'Check':
                let checkStr = commands[1];

                if (text.includes(checkStr)) {

                    console.log(`Message contains ${checkStr}`);
                } else {

                    console.log(`Message doesn't contain ${checkStr}`);
                }
                break;
            case 'Sum':
                let strat = Number(commands[1]);
                let end = Number(commands[2]);

                if (strat >= 0 && strat < text.length && end >= 0 && end < text.length) {

                    let sub = text.substring(strat, end + 1);
                    let sum = 0;

                    for (let i = 0; i < sub.length; i++) {

                        sum += sub.charCodeAt(i);
                    }
                    console.log(sum);

                }else{

                    console.log('Invalid indices!');
                }
                break;


        }

        commandInfo = input.shift();
    }

}

// decryptingCommands((["ILikeSoftUni",
//     "Replace I We",
//     "Make Upper",
//     "Check SoftUni",
//     "Sum 1 4",
//     "Cut 1 4",
//     "Finish"])
// );
decryptingCommands((["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
);