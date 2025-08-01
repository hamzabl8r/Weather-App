import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='Search-Container'>
            <input
                type='text'
                value={city}
                placeholder='Search City'
                onChange={(e) => { setCity(e.target.value) }}
                className="search-input"
            />
            <button type='submit' className='btn search-button'>
                Get Weather
            </button>
        </form>
    );
}

export default Search;