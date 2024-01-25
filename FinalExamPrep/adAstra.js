function adAstra(input) {

    let info = input[0];
    let pattern = /([#|\|])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let daysWithFood = 0;
    let products = [];

    let validItem = pattern.exec(info);

    while (validItem !== null) {

        let calories = validItem.groups['calories'];
        totalCalories += Number(calories);
        let item = validItem.groups['item'];
        let expDate = validItem.groups['expDate'];
        let product = `Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`
        products.push(product);

        validItem = pattern.exec(info);
    }

    daysWithFood = totalCalories / 2000;
    
    console.log(`You have food to last you for: ${Math.floor(daysWithFood)} days!`);

    products.forEach(p => console.log(p));

}

// adAstra([

//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

//     ]);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);