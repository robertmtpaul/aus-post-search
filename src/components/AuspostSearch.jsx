import React, { useState, useEffect } from "react";
import axios from 'axios';

// Import the child components that this component will be using
import SearchForm from './SearchForm';

// Constants for API requests
const BASE_URL = "https://digitalapi.auspost.com.au";
const API_KEY = "872608e3-4530-4c6a-a369-052accb03ca8";


const AuspostSearch = (postcode, state) => {
	const [responseData, setResponseData] = useState("");
  
	const fetchAuspostInfo = () => {
	  const options = {
		headers: { "AUTH-KEY": API_KEY },
	  };
	  // Long-form axios request
	  // axios({
	  //   "method": "GET",
	  //   "url": BASE_URL,
	  // 	"headers": {
	  // 	  "AUTH-KEY": API_KEY
	  // 	}, "parameters": {
	  // 	  "q" : postcode,
	  // 	  "state" : state
	  // 	}
	  //   })
	  // Short-form axios request to API resource URL, using custom headers
	  axios
		.get(BASE_URL, {
		  q: postcode,
		  state: state,
		}, options)
		.then((response) => {
		  setResponseData(response.data);
		  console.log("server response: ", response.data, responseData);
		})
		.catch((error) => {
		  console.log(error);
		});
	}; // fetchAustPostInfo
  
	useEffect(() => {
	  fetchAuspostInfo();
	}, []);
  };

  export default AuspostSearch