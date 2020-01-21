import React, { useState } from 'react'

const NewCity = ({addCity}) => {

    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addCity(name);
        setName('');
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>City name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='submit' value='add' />
            </form>
        </div>
    )
}


export default NewCity;