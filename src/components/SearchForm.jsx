import React, { useState, useEffect } from "react";
import AustpostSearch from './AustpostSearch'

const SearchForm = () => {
  //Pass to useState the initial value I want for this state
  const [searchPostcode, setSearchPostcode] = useState("");
  const [searchSuburb, setSearchSuburb] = useState("");

  const handlePostcodeInput = (event) => {
    setSearchPostcode(event.target.value);
    console.log(searchPostcode);
  };
  const handleSuburbInput = (event) => {
    // Stores the value entered into suburb field into state using useState
    setSearchSuburb(event.target.value);
    console.log(searchSuburb);
  };

  const handleSubmit = () => {
    AustpostSearch();
  };

  return (
    <div>
      <h2>Search address in Australia Post database</h2>
     
      <form onSubmit={handleSubmit}
      // Upon submitting the form, it runs handleSubmit function
      >
        <label>Search by postcode</label>
        <input
          type="text"
          onChange={handlePostcodeInput}
          placeholder="e.g. 5000"
        />
        <br />

        {/* TODO: add CSS breaks */}

      <label>Search by suburb</label>
        <input
          type="text"
          onChange={handleSuburbInput}
          placeholder="e.g. Smithfield"
        />
        <br />
        
        {/* TODO: add CSS breaks */}
        <button onClick={handleSubmit} //upon hitting button, runs handleSubmit
        >Search address</button> 
      </form>

     {/* <h3>Tests:</h3>
      <p>Typed: {searchPostcode}</p>
      <p>Typed: {searchSuburb}</p>  */}
    </div>
  );
}; // SearchForm()



export default SearchForm;
