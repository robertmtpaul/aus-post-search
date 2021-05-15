import React, { useState } from "react";
import axios from "axios";


const Search = (props) => {
  //Pass to useState the initial value I want for this state
  const [searchPostcode, setSearchPostcode] = useState("");
  const [searchSuburb, setSearchSuburb] = useState("");

  const handlePostcodeInput = (event) => {
    setSearchPostcode(event.target.value);
    console.log(searchPostcode);
  };
  const handleSuburbInput = (event) => {
    setSearchSuburb(event.target.value);
    console.log(searchSuburb);
  };

  const handleSubmit = () => {};

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

        <label>Search by suburb</label>
        <input
          type="text"
          onChange={handleSuburbInput}
          placeholder="e.g. Smithfield"
        />
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
}; // Search()

export default Search;
