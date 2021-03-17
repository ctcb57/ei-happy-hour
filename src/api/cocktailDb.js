import Axios from "axios";

export const _getRandomCocktail = () => {
    return Axios.get('random.php');
}