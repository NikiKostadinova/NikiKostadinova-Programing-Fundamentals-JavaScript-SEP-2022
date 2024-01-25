function phoneShop(array){

    let phoneList = array.shift().split(', ');
    let commands = array;

    while(commands[0] !== 'End'){

        let comm = commands.shift().split(' - ');

        if(comm[0] === 'Add'){

            if(phoneList.includes(comm[1]) === false){

                phoneList.push(comm[1]);
            }else{

                continue;
            }
        }else if(comm[0] === 'Remove'){

            if(phoneList.includes(comm[1]) === true){

                let index = phoneList.indexOf(comm[1]);
                phoneList.splice(index, 1);
            }else{

                continue;
            }

        }else if(comm[0] === 'Bonus phone'){

            let bonusPhone = comm[1];
            bonusPhone = bonusPhone.split(':');

            if(phoneList.includes(bonusPhone[0]) === true){

                let indexBonusPhone = phoneList.indexOf(bonusPhone[0]);
                phoneList.splice(indexBonusPhone +1, 0, bonusPhone[1]);
                
            }else{

                continue;
            }
        }else if(comm[0] === 'Last'){

            if(phoneList.includes(comm[1]) === true){

                let index = phoneList.indexOf(comm[1]);
                let phone = phoneList[index];
                phoneList.splice(index, 1);
                phoneList.push(phone);
            }else{

                continue;
            }
        }


        
    }

    console.log(phoneList.join(', '));

    

}

// phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
// "Add - Iphone10",
// "Remove - IphoneSE",
// "End"])
// )
// phoneShop((["HuaweiP20, XiaomiNote",
// "Remove - Samsung",
// "Bonus phone - XiaomiNote:Iphone5",
// "End"])
// )
phoneShop((["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])
)
