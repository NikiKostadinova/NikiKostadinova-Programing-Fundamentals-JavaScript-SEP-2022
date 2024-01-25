function arrayModifier(array) {

    let numbers = array.shift().split(' ').map(Number);

    while (array.length > 0) {

        let getCommand = array.shift().split(' ');
        let command = getCommand[0];

        if (command === 'swap') {
            // “swap {index1} {index2}” take two elements and swap their places.
            let index1 = Number(getCommand[1]);
            let index2 = Number(getCommand[2]);
            let firstNumber = numbers[index1];

            numbers.splice(index1, 1, numbers[index2]);
            numbers.splice(index2, 1, firstNumber);

        } else if (command === 'multiply') {
            // “multiply {index1} {index2}” take element at the 1st index and multiply 
            //it with element at 2nd index. Save the product at the 1st index.
            let index1 = Number(getCommand[1]);
            let index2 = Number(getCommand[2]);
            let firstNumber = numbers[index1];
            let secondNumber = numbers[index2];
            let newNumber = firstNumber * secondNumber;

            numbers.splice(index1, 1, newNumber);

        } else if (command === 'decrease') {
            // “decrease” decreases all elements in the array with 1

            for (let i = 0; i < numbers.length; i++) {

                
                let newNum = numbers.shift();
                newNum = newNum - 1;                
                numbers.push(newNum);


            }
        } else if (command === 'end') {

            console.log(numbers.join(', '));
        }

    }


}

arrayModifier([

    '1 2 3 4',
    
    'swap 0 1',
    
    'swap 1 2',
    
    'swap 2 3',
    
    'multiply 1 2',
    
    'decrease',
    
    'end'
    
    ])