function followers(input) {

    let janeFollowers = {};

    let commandInfo = input.shift();

    while (commandInfo !== 'Log out') {

        let commands = commandInfo.split(': ');
        let command = commands[0];
        let name = commands[1];

        switch (command) {
            case 'New follower':

                if (janeFollowers.hasOwnProperty(name) === false) {

                    janeFollowers[name] = {
                        likes: 0,
                        comments: 0,
                    }
                }
                break;
            case 'Like':

                let count = Number(commands[2]);
                if (janeFollowers.hasOwnProperty(name)) {

                    janeFollowers[name].likes += count;
                }else{
                    janeFollowers[name] = {
                        likes: count,
                        comments: 0
                    }
                }
                break;
            case 'Comment':
                if(janeFollowers.hasOwnProperty(name)){

                    janeFollowers[name].comments += 1;
                }else{
                    janeFollowers[name] = {
                        likes: 0,
                        comments: 1,
                    }
                }
                break;
            case 'Blocked':
                if(janeFollowers.hasOwnProperty(name)){

                    delete janeFollowers[name];
                }else{

                    console.log(`${name} doesn't exist.`);
                }
                break;
        }

        commandInfo = input.shift();
    }

    let countFollowers = Object.keys(janeFollowers).length;
    console.log(`${countFollowers} followers`);

    for(const follower in janeFollowers){

        let likes = janeFollowers[follower].likes;
        let comments = janeFollowers[follower].comments;
        let sum = likes + comments;

        console.log(`${follower}: ${sum}`);

    }
}

// followers((["New follower: George",
//     "Like: George: 5",
//     "New follower: George",
//     "Log out"])
// );
// followers((["Like: Katy: 3",
// "Comment: Katy",
// "New follower: Bob",
// "Blocked: Bob",
// "New follower: Amy",
// "Like: Amy: 4",
// "Log out"])
// );
followers((["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
);