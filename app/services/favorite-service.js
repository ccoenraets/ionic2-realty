let favorites = [];

// Simulating async calls for plug-and-play replacement with REST services
export let findAll = () => new Promise((resolve, reject) => {
    resolve(favorites);
});

export let add = (property) => new Promise((resolve, reject) => {
    let exists = false;
    for (let i=0; i<favorites.length; i++) {
        if (favorites[i].id === property.id) {
            exists = true;
            break;
        }
    }
    if (!exists) favorites.push(property);
    resolve();
});

export let deleteItem = (property) => new Promise((resolve, reject) => {
    for (let i=0; i<favorites.length; i++) {
        if (favorites[i].id === property.id) {
            favorites.splice(i, 1);
            break;
        }
    }
    resolve();
});
