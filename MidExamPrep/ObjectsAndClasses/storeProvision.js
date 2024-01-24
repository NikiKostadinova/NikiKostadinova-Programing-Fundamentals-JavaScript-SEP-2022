function storeProvision(stored, delivery){

    const storedItem = {};

    for(let index = 0; index < stored.length; index += 2){

        const currentProduct = stored[index];
        storedItem[currentProduct] = Number(stored[index + 1]);

    }
    for(let index = 0; index < delivery.length; index += 2){

        const currentProduct = delivery[index];

        if(!storedItem.hasOwnProperty(currentProduct)){

        storedItem[currentProduct] = 0;

        }

        storedItem[currentProduct] += Number(delivery[index + 1]);
        
    }

    for(const product in storedItem){

        console.log(`${product} -> ${storedItem[product]}`);
    }

}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ] )