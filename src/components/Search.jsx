import React, {useState} from 'react';


const Search = (props) => {
	//Pass to useState the initial value I want for this state
	const [ searchPostcode, setSearchPostcode ] = useState('');

	const handleInput = (ev) => {
		setSearchPostcode(ev.target.value);
		console.log(setSearchPostcode)
	}

	// const handleSubmit = () => {

	// }
	// ----------
	// ---------

	return (
		<div>
			<h1>Search address in Australia Post database</h1>
			<label>Search by Postcode</label>
			<input type="text" onChange={handleInput} />
			<p>
				Typed: { searchPostcode }
			</p>
		</div>
	)


} // Search()



export default Search