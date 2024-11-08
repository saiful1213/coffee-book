import toast from "react-hot-toast";

// get from LS
const getFavourite = () => {
    const favourites = localStorage.getItem('favourites');
    if (favourites) {
        return JSON.parse(favourites);
    }
    return [];
}

// remove from LS
const removeFavourite = id => {
    const favourites = getFavourite();
    const remaining = favourites?.filter(item => item.id !== id);
    localStorage.setItem('favourites', JSON.stringify(remaining));
    toast.success('Successfully removed favourits coffee');
}

// set to LS
const addFavourite = coffee => {
    const favourites = getFavourite();
    const isExist = favourites.find(item => item.id === coffee.id);
    if (isExist) {
        return toast.error('coffee already exist in favourite lists!!');
    }
    favourites.push(coffee);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    toast.success('Successfully coffee added in favourite lists');
}

export { addFavourite, getFavourite, removeFavourite };