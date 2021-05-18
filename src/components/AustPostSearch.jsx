import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import child components component will be using
import SearchForm from './SearchForm'

const BASE_URL = 'https://digitalapi.auspost.com.au'
const API_KEY = '872608e3-4530-4c6a-a369-052accb03ca8'

const AustPostSearch = (postcode, state ) => {

	const [responseData, setResponseData] = useState('');
  
	const fetchAusPostInfo = () => {
	axios({
	  "method": "GET",
	  "url": BASE_URL,
		"headers": {
		  "AUTH-KEY": API_KEY
		}, "parameters": {
		  "q" : postcode,
		  "state" : state
		}
	  })
	  .then( response => {
		console.log('server response: ', response.data);
		setResponseData(response.data);
	  }) 
	  .catch((error) => {
		console.log(error)
	  })
	}; // fetchAustPostInfo
  
	useEffect ( () => {
	  fetchAusPostInfo();
	}, [] );
  
  }

// const infoUrl = `${AUSPOST}`

export default AustPostSearch