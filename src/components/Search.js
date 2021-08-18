import React from 'react';

const Search = (props) => {
	
	return(
		<div className="search-bar">
			<i className="fas fa-search"></i>
		        <input
		            type="text"
		            id="searchbar"
		            placeholder="Search for a country..."
		            onChange={() => props.searchFunc()}
		        />


		</div>
		)

}

export default Search;