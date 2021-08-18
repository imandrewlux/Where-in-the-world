import React from 'react';

const CountryContainer = (props) => {
	

	return(
		<div className={`${props.data.alpha3Code + " country-container"}`} onClick={() => props.modalFunc(props.data.alpha3Code)}>
			<img src={props.data.flag} alt={props.data.name} />
			<div className="info-section">
				<h2 className="name">{props.data.name}</h2>
				<span className="population"><b>Population</b>: {props.data.population}</span>
				<span className="region"><b>Region</b>: {props.data.region}</span>
				<span className="capitol"><b>Capitol</b>: {props.data.capital}</span>
			</div>
		</div>
		)
}

export default CountryContainer