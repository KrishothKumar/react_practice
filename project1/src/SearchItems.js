import React from "react";
import {FaPlus} from "react-icons/fa"

const SearchItems = ({search, setSearch, handleSubmit}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input id="search" placeholder="Search Item" type="text"
            role='searchbox' value={search} onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItems