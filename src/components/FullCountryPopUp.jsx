import React from 'react';
import Header from './Header';

const FullCountryPopUp = (props) => {

	return(
		<div className={`${props.data.alpha3Code + " full-country-container"}`}>
		<Header />
			<div className="back-container">
				<div className="back-button" onClick={() => props.modalFunc(props.data.alpha3Code)}><i className="fa fa-arrow-left" aria-hidden="true"></i> Back</div>
			</div>

			<div className="country-container-full">
				<img src={props.data.flag} alt={props.data.name} />
				<div className="full-info">
					<h2 className="name">{props.data.name}</h2>
					<div className="full-info-left">
						<span className="native-name"><b>Native Name</b>: {props.data.nativeName}</span>
						<span className="population"><b>Population</b>: {props.data.population}</span>
						<span className="region"><b>Region</b>: {props.data.region}</span>
						<span className="sub-region"><b>Sub-Region</b>: {props.data.subregion}</span>
						<span className="capitol"><b>Capitol</b>: {props.data.capital}</span>
					</div>
					<div className="full-info-right">
						<span className="top-level-dom"><b>Top Level Domain</b>: {props.data.topLevelDomain}</span>
						<span className="currency"><b>Currencies</b>:
						{props.data.currencies && props.data.currencies.map( (currencies, key) => {
							return(
								 <span key={key}>{currencies.name}</span>
								)
						} )}</span>
						<span className="languages"><b>Languages</b>:
						{props.data.languages && props.data.languages.map( (languages, key) => {
							return(
								 <span key={key}>{languages.name}</span>
								)
						} )}</span>
					</div>
					<div className="border-countries">
						<span className="borders"><b>Border Countries:</b> <div className="border-country-box">
						{props.data.borders && props.data.borders.map( (borders, key) => {
							
							return(
								 <p key={key} onClick={() => props.borderClick(borders)}>{borders}</p>
								)
						} )}</div></span>
					</div>

				</div>
			</div>
		</div>
		)
}

export default FullCountryPopUp