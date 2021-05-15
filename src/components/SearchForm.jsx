import React, {useState, useEffect} from 'react';
import axios from "axios";


const BASE_URL = `https://digitalapi.auspost.com.au/postcode/search`
const API_KEY = '872608e3-4530-4c6a-a369-052accb03ca8'

const performSearch = (postCode, state) => {

  let [responseData, setResponseData] = React.useState('');

  axios({
    "method": "GET",
    "url": "https://digitalapi.auspost.com.au/postcode/search",
      "headers": {
        "AUTH-KEY": "872608e3-4530-4c6a-a369-052accb03ca8"
      }, "parameters": {
        "q" : postCode,
        "state" : state
      }
    })
    .then((response => {
      console.log('server response: ', response.data);
      set
    }, 
    .catch((error) => {
      console.log(error)
    })
  }, [] )




const SearchForm = (props) => {
  //Pass to useState the initial value I want for this state
  const [searchPostcode, setSearchPostcode] = useState("");
  const [searchSuburb, setSearchSuburb] = useState("");

  const handlePostcodeInput = (event) => {
    setSearchPostcode(event.target.value);
    console.log(searchPostcode);
  };
  // const handleSuburbInput = (event) => {
  //   setSearchSuburb(event.target.value);
  //   console.log(searchSuburb);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    performSearch()
  };

  return (
    <div>
      <h2>Search address in Australia Post database</h2>
      <form onSubmit={handleSubmit}>
        <label>Search by postcode</label>
        <input
          type="text"
          onChange={handlePostcodeInput}
          placeholder="e.g. 5000"
        />
        <br />
        {/* TODO: add CSS breaks */}

        {/* <label>Search by suburb</label>
        <input
          type="text"
          onChange={handleSuburbInput}
          placeholder="e.g. Smithfield"
        /> */}
        <br />
        {/* TODO: add CSS breaks */}
        <button onClick={handleSubmit}>Search address</button>
      </form>
      {/* TODO: remove below code */}
      <h3>Tests:</h3>
      <p>Typed: {searchPostcode}</p>
      <p>Typed: {searchSuburb}</p>
    </div>
  );
}; // SearchForm()



export default SearchForm;
