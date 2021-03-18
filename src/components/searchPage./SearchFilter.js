import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select, { createFilter } from "react-select";

import ErrorMessage from "../../components/ErrorMessage";

const SearchFilter = ({ value, searchType, onChange, error, errorMessage }) => {
    const [lastSearch, setLastSearch] = useState(value);
    const [selectedOption, setSelectedOption] = useState({ value: "", label: "Select your option..."});
    const searchOptions = [
        {
            value: "Drink Name",
            label: "Drink Name"
        },
        {
            value: "Drink First Letter",
            label: "Drink First Letter"
        },
        {
            value: "Ingredient",
            label: "Ingredient"
        }
    ]

    const handleFilter = (e) => {
        e.preventDefault();
        onChange(lastSearch, selectedOption.value);
    }

    const clearFilter = (e) => {
        setLastSearch("");
        onChange("");
    }

    return (
        <>
            <div className="uk-card uk-card-small uk-card-default uk-card-body uk-box-shadow-small">
                <h3 className="uk-card-title uk-margin-small-bottom search__title">
                    Find Your Favorite Drink
                </h3>
                <form className="uk-margin-bottom">
                    <div className="uk-gird-small uk-child-width-1-1 uk-margin-bottom" data-uk-grid>
                        <label className="uk-form-label search__form--label">Search Category</label>
                        <Select 
                            filterOption={createFilter({ ignoreAccents: false })}
                            options={searchOptions}
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e)}
                        />
                    </div>
                    {selectedOption.value ? 
                    <div className="uk-grid-small uk-child-width-1-1 uk-margin-top" data-uk-grid>
                        <div>
                            <label className="uk-form-label search__form--label" htmlFor="drink-search">
                                Search
                            </label>
                        </div>
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon uk-margin-left">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <button 
                                className="uk-button uk-button-link uk-form-icon uk-form-icon-flip uk-animation-fade uk-animation-fast"
                                onClick={clearFilter}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <input 
                                id="drink-search"
                                className="uk-input"
                                type="text"
                                value={lastSearch}
                                onChange={(e) => setLastSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    : 
                    ""
                    }
                    
                    {selectedOption.value ? 
                    <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                        <ErrorMessage 
                            isError={error}
                            message={errorMessage}
                        />
                        <div>
                            <button 
                                type="submit"
                                className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                onClick={(e) => handleFilter(e)}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    :
                    ""
                    }
                </form>
            </div>
        </>
    )
}

export default SearchFilter;