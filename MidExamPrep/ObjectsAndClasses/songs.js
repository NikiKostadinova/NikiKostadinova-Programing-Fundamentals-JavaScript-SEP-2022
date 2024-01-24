function songsList(array){

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberSongs = array.shift();
    let type = array[array.length - 1];

    for(let i = 0; i < array.length - 1; i ++){

        let songsData = array[i].split('_');
        let typeList = songsData[0];
        let name = songsData[1];
        let time = songsData[2];

        let newSong = new Song(typeList, name, time);

        if(type === 'all'){

            console.log(newSong.name);
        }else if(type === typeList){

            console.log(newSong.name);
        }
    }

}

songsList([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])