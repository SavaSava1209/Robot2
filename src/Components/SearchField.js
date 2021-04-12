import React from 'react';
import 'tachyons';


const SearchField = ({onSearchChange}) => {
    console.log('searchBox')
    return (
        <div className=''>
           <input 
           onChange={onSearchChange}
           className='pa2 ma3 bg-light-green' type='search' placeholder='search robots' />
        </div>
    )
};

export default SearchField;