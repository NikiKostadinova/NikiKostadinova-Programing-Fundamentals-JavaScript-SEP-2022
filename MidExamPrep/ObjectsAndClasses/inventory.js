function inventory(heroesInput) {

    let heros = [];
   
    for (let i = 0; i < heroesInput.length; i++) {

        let newHero = heroesInput[i];
        let [name, level, items] = newHero.split(' / ');
        level = Number(level);

        heros.push({ name: name, level: level, items: items });


    }

    heros.sort((a, b) => a.level - b.level);

    heros.forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`));


}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])