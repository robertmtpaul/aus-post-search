import React, {useState} from 'react';


const Search = (props) => {
	const [ searchPostcode, setSearchPostcode ] = useState('');

	const handleInput = (ev) => {
		setSearchUsername(ev.target.value);
	}
}


export default SearchAddress