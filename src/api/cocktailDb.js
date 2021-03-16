import Axios from "axios";

export const _getRandomCocktail = () => {
    return Axios.get('search.php?i=whiskey');
}