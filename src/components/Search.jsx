import React, {useState} from 'react';


const Search = (props) => {
	//Pass to useState the initial value I want for this state
	const [ searchPostcode, setSearchPostcode ] = useState('0000');
	const [ searchSuburb, setSearchSuburb] = useState('suburb');

	const handlePostcodeInput = (event) => {
		setSearchPostcode(event.target.value);
		console.log(searchPostcode)
	}
	const handleSuburbInput = (event) => {
		setSearchSuburb(event.target.value);
		console.log(searchSuburb)
	}

	const handleSubmit = () => {

	}

	return (
		<div>
			<h1>Search address in Australia Post database</h1>
			<form onSubmit={handleSubmit}>
				<label>Search by postcode</label>
				<input type="text" onChange={handlePostcodeInput} />
				<label>Search by suburb</label>
				<input type="text" onChange={handleSuburbInput} />
			</form>
			<p>
				Typed: { searchPostcode }
			</p>
			<p>
				Typed: { searchSuburb }
			</p>
		</div>
	)


} // Search()



export default Search