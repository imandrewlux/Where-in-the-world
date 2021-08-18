import React from 'react';

const DropDown = (props) => {
 
	
	return(
		<div className="drop-down">
			<select name="countries" id="countries" onChange={() => props.dropDownFunc()}>
						<option value="">Filter by Region</option>
						<option value="africa">Africa</option>
						<option value="america">America</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
						
			</select>
		</div>
		)

}

export default DropDown;