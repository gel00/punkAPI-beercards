import React from 'react'

const SearchBar = ({handler}) => {
  const getText= ({target})=> {
    handler(target.value);
  };

  return (
    <div>
      <label htmlFor="search">
      {"Search: "}
        <input id="beer" type="text" onChange={getText}/>
      </label>
    </div>
  )
}

export default SearchBar
