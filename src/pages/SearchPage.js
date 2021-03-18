import React, { useState, useEffect } from 'react';

import Header from "../components/base/Header";
import SearchFilter from '../components/searchPage./SearchFilter';
import LoadingSpinner from "../components/base/LoadingSpinner";

import { _getCocktailByName, _getCocktailByFirstLetter, _getCocktailByIngredient} from "../api/cocktailDb";

const SearchPage = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [searchType, setSearchType] = useState();
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (searchType === "Drink Name"){
            _getCocktailByName(search)
                .then((response) => {
                    setResults(response.drinks);
                    setLoading(false);
                })
                .catch((err) => {});
        }
        else if (searchType === "Drink First Letter"){
            if (search.length > 1){
                setError(true);
                setErrorMessage("You entered too many letters.  Please search by one letter");
                return;
            }
            _getCocktailByFirstLetter(search)
                .then((response) => {
                    setResults(response.drinks);
                    setLoading(false);
                })
                .catch((err) => {})
        }
        else if (searchType === "Ingredient") {
            _getCocktailByIngredient(search)
                .then((response) => {
                    setResults(response.drinks);
                    setLoading(false);
                })
                .catch((err) => {});
        }
    }, [search, searchType])

    const handleSearch = (search, searchType) => {
        setSearch(search);
        setSearchType(searchType);
    }

    console.log(results);

    return (
        <>
            <Header />
            <SearchFilter 
                value={search}
                searchType={searchType}
                onChange={handleSearch}
            />
            {isLoading && results.length < 1 && search.length > 0 ? 
            <LoadingSpinner 
                isLoading={isLoading}
            />
            :
            ""}
        </>
    )
}

export default SearchPage;