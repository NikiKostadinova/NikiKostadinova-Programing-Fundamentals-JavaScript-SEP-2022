function friendListMaintenance(array) {

    let friendList = array.shift().split(', ');
    // let commands = array;
    let countBlacklistedNames = 0;
    let countLostNames = 0;

    while (array[0] !== 'Report') {

        let comm = array.shift().split(' ');

        if (comm[0] === 'Blacklist') {

            if (friendList.includes(comm[1]) === false) {

                console.log(`${comm[1]} was not found.`);
                continue;
            } else {

                let index = friendList.indexOf(comm[1]);
                friendList.splice(index, 1, 'Blacklisted');
                console.log(`${comm[1]} was blacklisted.`);
                countBlacklistedNames++;
            }

        } else if (comm[0] === 'Error') {

            let index = Number(comm[1]);

            if (index >= 0 && index < friendList.length
                && friendList[index] !== 'Blacklisted'
                && friendList[index] !== 'Lost') {

                    let name = friendList[index];
                friendList.splice(index, 1, 'Lost');
                console.log(`${name} was lost due to an error.`);
                countLostNames++;
            } else {

                continue;
            }
        } else if (comm[0] === 'Change') {

            let index = Number(comm[1]);
            let newName = comm[2];

            if (index >= 0 && index < friendList.length) {

                let currentName = friendList[index];
                friendList.splice(index, 1, newName);
                console.log(`${currentName} changed his username to ${newName}.`);

            } else {

                continue;
            }
        }

    }

    console.log(`Blacklisted names: ${countBlacklistedNames}`);
    console.log(`Lost names: ${countLostNames}`);
    console.log(friendList.join(' '));


}

// friendListMaintenance(["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"])


// friendListMaintenance(["Mike, John, Eddie, William",
// "Error 3",
// "Error 3",
// "Change 0 Mike123",
// "Report"])


friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])