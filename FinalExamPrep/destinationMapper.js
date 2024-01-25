function destinationMapper(input){

    let pattern = /([=|\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;

    let destMatches = pattern.exec(input);

   while(destMatches !== null){

     let destination = destMatches.groups['destination'];
    destinations.push(destination);
    travelPoints += destination.length;
    destMatches = pattern.exec(input);
    
   }


   let string = 'Destinations: ';
   let stringDest = destinations.join(', ');
   

   console.log(string.concat(stringDest));
   console.log(`Travel Points: ${travelPoints}`);
   


}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
