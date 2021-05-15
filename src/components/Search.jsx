import React, {useState} from 'react';


const Search = (props) => {
	//Pass to useState the initial value I want for this state
	const [ searchPostcode, setSearchPostcode ] = useState('');

	const handleInput = (ev) => {
		setSearchPostcode(ev.target.value);
	}

	// const handleSubmit = () => {

	// }
	// ----------
	// ---------

	return (
		<div>
			<label>Search by Postcode</label>
			<input type="text" onChange={handleInput} />
		</div>
	)



} // Search()



export default Search