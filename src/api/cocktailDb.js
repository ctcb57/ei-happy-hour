import Axios from "axios";

export const _getRandomCocktail = () => {
    return Axios.get('random.php');
}

export const _getCocktailByName = (name) => {
    return Axios.get(`search.php?s=${name}`);
}

export const _getCocktailByFirstLetter = (letter) => {
    return Axios.get(`search.php?f=${letter}`);
}

export const _getCocktailByIngredient = (ingredient) => {
    return Axios.get(`filter.php?i=${ingredient}`);
}