import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';

import Header from './components/Header';
import CountryContainer from './components/CountryContainer';
import Search from './components/Search';
import DropDown from './components/DropDown';
import FullCountryPopUp from './components/FullCountryPopUp';

const App = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [countrySearch, setcountrySearch] = useState(null);
  const [regionSearch, setregionSearch] = useState(null);

  //gets all the country info
  useEffect( () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(
      response => {
        setAllCountries(response.data);
      }
  )}, []);

  //sets the region drop down
  const getDropDownChoice = () => {
     let selector = document.getElementById("countries");
     if(selector){
      setregionSearch(selector.value);
      }
  }

  //set the search bar input
  const getSearchChoice = () => {
    let selector = document.getElementById('searchbar');
    if(selector){
      setcountrySearch(selector.value);
    }
  }
 
 //this function determines wether or not to filter by region or by name
 const searchSearch = (allCountries, countrySearch, regionSearch) => {
  // if there is no search for either region or name
  if( !countrySearch && !regionSearch ){
        return allCountries;
      }
  // if their is search term for name but no region
  if(countrySearch && !regionSearch){
      return allCountries.filter( (allCountries) =>{
        let countryName = allCountries.name.toLowerCase();
        let countrySearchlwr = countrySearch.toLowerCase();
        return countryName.includes(countrySearchlwr)
      })
  };
  // if there is search for region but no name
  if(!countrySearch && regionSearch){
    return allCountries.filter( (allCountries) => {
      let regionName = allCountries.region.toLowerCase();
      return regionName.includes(regionSearch)
    })
  };
  //need to figure out how to filter with both region and name
  if(countrySearch && regionSearch){
    return allCountries;
  }
 }

 const borderClick = (code) => {
  let modelChoice = document.querySelector(`.full-country-container.${code}`);
  let openModal = document.querySelector('.ON');
  openModal.classList.remove("ON");
  modelChoice.classList.add("ON");
 }


// this opens the modal
 const openPopup = (code) => {
  let modelChoice = document.querySelector(`.full-country-container.${code}`);
  let body = document.body;
  //modelChoice.style.display = "block";
  modelChoice.classList.add("ON");
  body.style.overflow = 'hidden';
 }

//this closes the modal
 const closePopup = (code) => {
  let modelChoice = document.querySelector(`.full-country-container.${code}`);
  let body = document.body;
  //modelChoice.style.display = "none";
  modelChoice.classList.remove("ON");
  body.style.overflow = 'unset';
 }


  return (
    <div className="App light">
      <Header />
      <div className="search-container">
        <Search searchFunc={ () => getSearchChoice()} />
        <DropDown dropDownFunc={getDropDownChoice} />
      </div>
    <div className="main-container">
      {allCountries && (searchSearch(allCountries, countrySearch ,regionSearch).map( (countries, key) =>
        (
            <CountryContainer data={countries} key={key} modalFunc={openPopup} />
            )
       )) }
      {allCountries && (allCountries.map( (countries, key) =>
        (
            <FullCountryPopUp data={countries} key={key} modalFunc={closePopup} borderClick={borderClick}/> 
            )
            
       )) }


            
      </div>
    </div>
  );
}

export default App;
